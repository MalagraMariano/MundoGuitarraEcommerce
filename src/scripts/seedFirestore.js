// Script para cargar productos a Firestore
// Ejecutar con: node src/scripts/seedFirestore.js

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, getDocs, deleteDoc, doc } from "firebase/firestore";

// Configuración de Firebase (misma que en firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyBr_SvJJ3NrXLktAVoq7GjcHtLNUYrIQNw",
  authDomain: "coderhouse-ecommerce-2e25f.firebaseapp.com",
  projectId: "coderhouse-ecommerce-2e25f",
  storageBucket: "coderhouse-ecommerce-2e25f.firebasestorage.app",
  messagingSenderId: "769256989812",
  appId: "1:769256989812:web:b511a163eaff7407ecdd21"
};

// Productos a cargar
// Nota: El campo 'id' se elimina antes de guardar. Firestore genera IDs automáticamente
const products = [
  {
    name: "Stratocaster Classic",
    category: "guitarras",
    price: 1200,
    description: "Guitarra eléctrica clásica con sonido versátil",
    image: "/src/data/img/D_739585-MLA99506171406_112025-C.jpg",
    stock: 15
  },
  {
    name: "Les Paul Custom",
    category: "guitarras",
    price: 2500,
    description: "Guitarra de lujo con cuerpo sólido y sonido profundo",
    image: "/src/data/img/med_bb8f746f10235bfbe8de520d03ba3dc5.jpg",
    stock: 8
  },
  {
    name: "Telecaster Vintage",
    category: "guitarras",
    price: 1100,
    description: "Guitarra versátil y confiable, perfecta para cualquier género",
    image: "/src/data/img/Telecaste.jpeg",
    stock: 12
  },
  {
    name: "Bajo Jazz Master",
    category: "bajos",
    price: 1800,
    description: "Bajo con sonido cálido y brillante, ideal para jazz",
    image: "/src/data/img/BajoJazzmaster.jpeg",
    stock: 6
  },
  {
    name: "Bajo Precision",
    category: "bajos",
    price: 1500,
    description: "Bajo clásico con tonalidad potente y definida",
    image: "/src/data/img/FenderPrecision.webp",
    stock: 10
  },
  {
    name: "Bajo Fretless",
    category: "bajos",
    price: 2000,
    description: "Bajo sin trastes para un sonido más suave y expresivo",
    image: "/src/data/img/bajofretless.webp",
    stock: 4
  },
  {
    name: "Ukelele Soprano",
    category: "ukelele",
    price: 150,
    description: "Ukelele pequeño y portátil con sonido brillante",
    image: "/src/data/img/UkeleleSoprano.jpeg",
    stock: 25
  },
  {
    name: "Ukelele Tenor",
    category: "ukelele",
    price: 350,
    description: "Ukelele de tamaño mediano con mayor volumen",
    image: "/src/data/img/UkeleleTenor.jpg",
    stock: 18
  },
  {
    name: "Pedal Distorsion",
    category: "pedales",
    price: 200,
    description: "Pedal de distorsión clásico para guitarras eléctricas",
    image: "/src/data/img/DS1.jpeg",
    stock: 20
  },
  {
    name: "Pedal Delay",
    category: "pedales",
    price: 300,
    description: "Pedal de delay digital con múltiples configuraciones",
    image: "/src/data/img/DD3.jpeg",
    stock: 14
  },
  {
    name: "Teclado 88 Teclas",
    category: "teclados",
    price: 800,
    description: "Teclado profesional con 88 teclas ponderadas",
    image: "/src/data/img/Yamaha.webp",
    stock: 7
  },
  {
    name: "Teclado Sintetizador",
    category: "teclados",
    price: 1200,
    description: "Sintetizador con sonidos versátiles y funciones avanzadas",
    image: "/src/data/img/SinteKorg.jpg",
    stock: 5
  }
];

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seedFirestore() {
  try {
    console.log("🚀 Iniciando carga de productos a Firestore...\n");

    // Opcional: Limpiar productos existentes
    console.log("📋 Limpiando productos existentes...");
    const querySnapshot = await getDocs(collection(db, 'products'));
    for (const docSnap of querySnapshot.docs) {
      await deleteDoc(doc(db, 'products', docSnap.id));
    }
    console.log("✅ Colección limpiada\n");

    // Agregar nuevos productos
    console.log("📦 Cargando productos...");
    let count = 0;

    for (const product of products) {
      try {
        const docRef = await addDoc(collection(db, 'products'), product);
        console.log(`✅ ${product.name} (ID: ${docRef.id})`);
        count++;
      } catch (error) {
        console.error(`❌ Error al agregar ${product.name}:`, error.message);
      }
    }

    console.log(`\n🎉 ¡Carga completada!\n`);
    console.log(`📊 Estadísticas:`);
    console.log(`   - Productos cargados: ${count}/${products.length}`);
    console.log(`   - Categorías: guitarras, bajos, ukelele, pedales, teclados`);
    console.log(`   - Stock total: ${products.reduce((acc, p) => acc + p.stock, 0)} unidades`);
    console.log(`   - Precio mínimo: $${Math.min(...products.map(p => p.price))}`);
    console.log(`   - Precio máximo: $${Math.max(...products.map(p => p.price))}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error general:", error);
    process.exit(1);
  }
}

seedFirestore();
