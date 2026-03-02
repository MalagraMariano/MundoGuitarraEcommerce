// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, doc, getDoc, addDoc, serverTimestamp, updateDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr_SvJJ3NrXLktAVoq7GjcHtLNUYrIQNw",
  authDomain: "coderhouse-ecommerce-2e25f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-2e25f",
  storageBucket: "coderhouse-ecommerce-2e25f.firebasestorage.app",
  messagingSenderId: "769256989812",
  appId: "1:769256989812:web:b511a163eaff7407ecdd21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getProductsFromFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    console.error("Error fetching products from Firestore:", error);
    return [];
  }
}

export async function getProductsByCategory(categoryId) {
  try {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const products = querySnapshot.docs
      .filter(doc => doc.data().category === categoryId)
      .map(doc => ({ id: doc.id, ...doc.data() }));
    return products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
}

export async function getProductById(productId) {
  try {
    const docRef = doc(db, 'products', productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("Product not found with ID:", productId);
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function createOrder(orderData) {
  try {
    const orderWithTimestamp = {
      ...orderData,
      createdAt: serverTimestamp(),
      status: 'pending'
    };
    
    // Crear la orden
    const docRef = await addDoc(collection(db, 'orders'), orderWithTimestamp);
    
    // Actualizar el stock de cada producto vendido
    for (const item of orderData.items) {
      const productRef = doc(db, 'products', item.id);
      const productSnap = await getDoc(productRef);
      
      if (productSnap.exists()) {
        const currentStock = productSnap.data().stock;
        const newStock = currentStock - item.quantity;
        
        await updateDoc(productRef, {
          stock: Math.max(0, newStock) // Asegurar que no sea negativo
        });
      }
    }
    
    return docRef.id;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}

export default app;