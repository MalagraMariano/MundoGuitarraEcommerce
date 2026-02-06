const products = [
  {
    id: 1,
    name: "Stratocaster Classic",
    category: "guitarras",
    price: 1200,
    description: "Guitarra eléctrica clásica con sonido versátil",
    image: "/src/data/img/D_739585-MLA99506171406_112025-C.jpg",
    stock: 15
  },
  {
    id: 2,
    name: "Les Paul Custom",
    category: "guitarras",
    price: 2500,
    description: "Guitarra de lujo con cuerpo sólido y sonido profundo",
    image: "/src/data/img/med_bb8f746f10235bfbe8de520d03ba3dc5.jpg",
    stock: 8
  },
  {
    id: 3,
    name: "Telecaster Vintage",
    category: "guitarras",
    price: 1100,
    description: "Guitarra versátil y confiable, perfecta para cualquier género",
    image: "/src/data/img/Telecaste.jpeg",
    stock: 12
  },
  {
    id: 4,
    name: "Bajo Jazz Master",
    category: "bajos",
    price: 1800,
    description: "Bajo con sonido cálido y brillante, ideal para jazz",
    image: "/src/data/img/BajoJazzmaster.jpeg",
    stock: 6
  },
  {
    id: 5,
    name: "Bajo Precision",
    category: "bajos",
    price: 1500,
    description: "Bajo clásico con tonalidad potente y definida",
    image: "/src/data/img/FenderPrecision.webp",
    stock: 10
  },
  {
    id: 6,
    name: "Bajo Fretless",
    category: "bajos",
    price: 2000,
    description: "Bajo sin trastes para un sonido más suave y expresivo",
    image: "/src/data/img/bajofretless.webp",
    stock: 4
  },
  {
    id: 7,
    name: "Ukelele Soprano",
    category: "ukelele",
    price: 150,
    description: "Ukelele pequeño y portátil con sonido brillante",
    image: "/src/data/img/UkeleleSoprano.jpeg",
    stock: 25
  },
  {
    id: 8,
    name: "Ukelele Tenor",
    category: "ukelele",
    price: 350,
    description: "Ukelele de tamaño mediano con mayor volumen",
    image: "/src/data/img/UkeleleTenor.jpg",
    stock: 18
  },
  {
    id: 9,
    name: "Pedal Distorsion",
    category: "pedales",
    price: 200,
    description: "Pedal de distorsión clásico para guitarras eléctricas",
    image: "/src/data/img/DS1.jpeg",
    stock: 20
  },
  {
    id: 10,
    name: "Pedal Delay",
    category: "pedales",
    price: 300,
    description: "Pedal de delay digital con múltiples configuraciones",
    image: "/src/data/img/DD3.jpeg",
    stock: 14
  },
  {
    id: 11,
    name: "Teclado 88 Teclas",
    category: "teclados",
    price: 800,
    description: "Teclado profesional con 88 teclas ponderadas",
    image: "/src/data/img/Yamaha.webp",
    stock: 7
  },
  {
    id: 12,
    name: "Teclado Sintetizador",
    category: "teclados",
    price: 1200,
    description: "Sintetizador con sonidos versátiles y funciones avanzadas",
    image: "/src/data/img/SinteKorg.jpg",
    stock: 5
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = products.filter(product => product.category === category);
      resolve(filtered);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = products.find(product => product.id === parseInt(id));
      resolve(product);
    }, 1000);
  });
};
