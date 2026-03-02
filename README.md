# 🎸 MundoGuitarra - E-Commerce de Instrumentos

Una tienda online de instrumentos musicales construida con **React**, **Vite**, **React Router** y **Firebase/Firestore**.

## 🚀 Características Principales

- 📱 **Catálogo dinámico** - Productos obtenidos de Firestore
- 🛒 **Carrito de compras** - Agregar/quitar productos con gestión de stock
- 🔐 **Checkout** - Formulario con validación y creación de órdenes
- 📦 **Órdenes** - Guardadas en Firestore con ID único
- 📊 **Stock automático** - Se actualiza al comprar
- 🔗 **Navegación SPA** - Sin recargas de página

## 📋 Requisitos

- Node.js 16+
- npm o yarn
- Cuenta Firebase (ya configurada)

## ⚡ Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📂 Estructura del Proyecto

```
src/
├── Components/          # Componentes React
│   ├── NavBar/         # Navegación
│   ├── ItemList/       # Listado de productos
│   ├── ItemDetail/     # Detalle del producto
│   ├── Cart/           # Página del carrito
│   ├── CartItem/       # Item en el carrito
│   ├── CheckoutForm/   # Formulario de compra
│   ├── CartWidget/     # Badge del carrito
│   └── OrderConfirmation/ # Confirmación de orden
├── contexts/           # Context API
│   ├── CartContext.js  # Definición del contexto
│   └── CartProvider.jsx # Lógica del carrito
├── firebase.js         # Configuración de Firebase
├── App.jsx            # Componente principal
└── main.jsx           # Punto de entrada
```

## 🛣️ Rutas Principales

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio - Catálogo completo |
| `/category/:id` | Productos por categoría |
| `/item/:id` | Detalle del producto |
| `/cart` | Carrito de compras |
| `/checkout` | Formulario de compra |
| `/order-confirmation/:orderId` | Confirmación de orden |

## 🔥 Firebase Firestore

### Colección: `products`
```
{
  name: "Stratocaster Classic",
  category: "guitarras",
  price: 1200,
  description: "...",
  image: "...",
  stock: 15
}
```

### Colección: `orders`
```
{
  buyer: { name, email, phone, address, city, zipCode },
  items: [ { id, name, price, quantity } ],
  total: 2400,
  status: "pending",
  createdAt: timestamp
}
```

## 📦 Cargar Productos a Firestore

```bash
node src/scripts/seedFirestore.js
```

Esto carga los 12 productos predefinidos en la base de datos.

## 🎯 Tecnologías Utilizadas

- **React 19** - Framework UI
- **React Router v6** - Navegación
- **Vite** - Build tool
- **Firebase SDK** - Base de datos
- **Firestore** - Base de datos en tiempo real
- **CSS3** - Estilos

## 💡 Características del Carrito

✅ Agregar/quitar productos  
✅ Modificar cantidades  
✅ Validar stock disponible  
✅ Calcular totales automáticamente  
✅ Persistencia con Context API  
✅ Badge dinámico en navbar  

## 📝 Compilar para Producción

```bash
npm run build
# La carpeta 'dist/' estará lista para deployment
```

## 🤝 Contacto

Proyecto de Coderhouse - Curso ReactJS

---

**¡Disfruta tu tienda online!** 🎵
