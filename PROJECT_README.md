# 🎸 MundoGuitarra - E-Commerce de Instrumentos Musicales

Una aplicación completa de e-commerce desarrollada con **React**, **React Router** y **Firebase/Firestore**, que permite a los usuarios navegar por un catálogo de instrumentos musicales, agregar productos al carrito y completar compras.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Componentes Principales](#componentes-principales)
- [Guía de Uso](#guía-de-uso)
- [Features Implementadas](#features-implementadas)
- [Base de Datos](#base-de-datos)

## ✨ Características

### Catálogo de Productos
- ✅ Listado dinámico de productos desde Firestore
- ✅ Filtrado por categorías (Guitarras, Bajos, Ukelele, Pedales, Teclados)
- ✅ Vista detallada de cada producto
- ✅ Información de precio, stock y descripción

### Carrito de Compras
- ✅ Agregar productos al carrito
- ✅ Modificar cantidades
- ✅ Eliminar productos del carrito
- ✅ Visualizar totales y subtotales
- ✅ Badge en el icono del carrito mostrando cantidad de items

### Checkout
- ✅ Formulario de datos de comprador
- ✅ Validación de campos
- ✅ Generación de órdenes en Firestore
- ✅ Confirmación de compra con ID de orden único

### Experiencia de Usuario
- ✅ Diseño responsivo y moderno
- ✅ Animaciones suaves
- ✅ Renderizado condicional de estados de carga
- ✅ Mensajes de confirmación al agregar productos
- ✅ Página 404 personalizada
- ✅ SPA (Single Page App) sin recargas

## 🛠 Tecnologías

- **React 19.2.0** - Framework principal
- **React Router v6** - Navegación entre páginas
- **Firebase** - Backend y base de datos
- **Firestore** - Base de datos NoSQL
- **CSS3** - Estilos y animaciones
- **React Icons** - Iconografía

## 📦 Instalación

```bash
# Clonar repositorio
git clone <tu-repositorio>

# Instalar dependencias
npm install

# Instalar Firebase si aún no está
npm install firebase

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── Components/
│   ├── NavBar/                    # Navegación principal
│   │   ├── NavBar.jsx
│   │   └── NavBar.css
│   ├── CarWidget/                 # Icono del carrito
│   │   ├── CarWidget.jsx
│   │   └── CarWidget.css
│   ├── ItemListContainer/         # Contenedor catálogo
│   │   └── ItemListContainer.jsx
│   ├── ItemList/                  # Presentador lista
│   │   ├── ItemList.jsx
│   │   └── ItemList.css
│   ├── Item/                      # Componente producto
│   │   ├── Item.jsx
│   │   └── Item.css
│   ├── ItemDetailContainer/       # Contenedor detalle
│   │   └── ItemDetailContainer.jsx
│   ├── ItemDetail/                # Presentador detalle
│   │   ├── ItemDetail.jsx
│   │   └── ItemDetail.css
│   ├── ItemCount/                 # Selector de cantidad
│   │   ├── ItemCount.jsx
│   │   └── ItemCount.css
│   ├── Cart/                      # Página del carrito
│   │   ├── Cart.jsx
│   │   └── Cart.css
│   ├── CartItem/                  # Item en el carrito
│   │   ├── CartItem.jsx
│   │   └── CartItem.css
│   ├── CheckoutForm/              # Formulario de compra
│   │   ├── CheckoutForm.jsx
│   │   └── CheckoutForm.css
│   ├── OrderConfirmation/         # Confirmación de orden
│   │   ├── OrderConfirmation.jsx
│   │   └── OrderConfirmation.css
│   ├── NotFound/                  # Página 404
│   │   ├── NotFound.jsx
│   │   └── NotFound.css
│   └── Footer/                    # Pie de página
│       └── Footer.jsx
├── context/
│   └── CartContext.jsx            # Context del carrito
├── firebase.js                    # Configuración Firebase
├── App.jsx                        # Componente principal
├── main.jsx                       # Punto de entrada
└── index.css
```

## 🧩 Componentes Principales

### CartContext
**Ubicación**: `src/context/CartContext.jsx`

Maneja el estado global del carrito con funciones:
- `addToCart(product, quantity)` - Agregar producto
- `removeFromCart(productId)` - Eliminar producto
- `updateQuantity(productId, quantity)` - Actualizar cantidad
- `clearCart()` - Vaciar carrito
- `getTotalItems()` - Obtener total de items
- `getTotalPrice()` - Obtener precio total

### ItemListContainer
**Tipo**: Contenedor (Smart Component)

Responsabilidades:
- Obtener productos de Firestore
- Manejar filtrado por categoría
- Gestionar estado de carga
- Pasar datos a ItemList

### ItemList
**Tipo**: Presentador (Dumb Component)

Responsabilidades:
- Renderizar grid de productos
- Usar `Array.map()` con prop `key`
- Generar links a detalle de productos

### ItemDetailContainer
**Tipo**: Contenedor (Smart Component)

Responsabilidades:
- Obtener producto individual de Firestore
- Usar `useParams()` para leer ID de URL
- Manejar adición al carrito
- Gestionar estado de "producto agregado"

### ItemDetail
**Tipo**: Presentador (Dumb Component)

Responsabilidades:
- Mostrar información del producto
- Renderizar ItemCount
- Mostrar mensaje de éxito al agregar

### ItemCount
Componente reutilizable para:
- Seleccionar cantidad (+/-)
- Validar contra stock
- Ejecutar callback al confirmar

### Cart
Página que muestra:
- Lista de productos en carrito
- Cantidades y precios individuales
- Subtotal y total
- Botones para checkout

### CheckoutForm
Formulario con:
- Validación de campos requeridos
- Información del comprador
- Generación de orden en Firestore
- Redirección a confirmación

### OrderConfirmation
Muestra:
- ID único de la orden
- Mensaje de éxito
- Próximos pasos
- Links de navegación

## 📖 Guía de Uso

### 1. Navegar por el Catálogo
- Accede a `/` para ver todos los productos
- Usa el menú superior para filtrar por categoría
- Haz click en un producto para ver detalles

### 2. Agregar al Carrito
- En la página de detalle, selecciona la cantidad con +/-
- Haz click en "Agregar al Carrito"
- Verás un mensaje de confirmación
- El badge del carrito se actualiza automáticamente

### 3. Ver el Carrito
- Haz click en el icono del carrito (arriba derecha)
- Visualiza todos tus productos
- Modifica cantidades o elimina productos
- Haz click en "Ir al Checkout"

### 4. Completar la Compra
- Completa el formulario con tus datos
- La validación avisa si hay errores
- Haz click en "Confirmar compra"
- Recibirás un ID único de orden

### 5. Confirmación
- Se mostrará tu número de orden
- Un email de confirmación será enviado
- Tu pedido será preparado para envío

## ✅ Features Implementadas

### Listado y Detalle
- ✅ Generación dinámica desde Firestore
- ✅ Separación contenedor/presentador
- ✅ Array.map() con key
- ✅ useParams() para obtener IDs

### ItemCount
- ✅ Selección de cantidad
- ✅ Validaciones de stock
- ✅ Se oculta tras agregar al carrito
- ✅ Mensaje de confirmación

### Navegación
- ✅ React Router completo
- ✅ SPA sin recargas
- ✅ NavBar dinámico
- ✅ Links en productos

### Carrito
- ✅ Context para estado global
- ✅ CartWidget con badge
- ✅ Página de carrito completa
- ✅ Cálculo automático de totales

### Firestore
- ✅ Consulta de productos
- ✅ Filtrado por categoría
- ✅ Búsqueda por ID
- ✅ Creación de órdenes
- ✅ Timestamps automáticos

### UX
- ✅ Loaders durante carga
- ✅ Mensajes de error/vacío
- ✅ Animaciones suaves
- ✅ Diseño responsivo
- ✅ Página 404 personalizada

### Checkout
- ✅ Validación de formulario
- ✅ Generación de orden única
- ✅ Confirmación con ID
- ✅ Guardado en Firestore

## 🔥 Base de Datos

### Colección: `products`
```javascript
{
  id: string (auto),
  name: string,
  category: string,
  price: number,
  description: string,
  image: string (URL),
  stock: number
}
```

### Colección: `orders`
```javascript
{
  id: string (auto),
  buyer: {
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string,
    zipCode: string
  },
  items: [
    {
      id: string,
      name: string,
      price: number,
      quantity: number
    }
  ],
  total: number,
  status: string,
  createdAt: timestamp
}
```

## 🎨 Diseño

- Colores principales: Verde (#2ecc71), Gris oscuro (#2c3e50)
- Tipografía: System fonts para mejor rendimiento
- Responsive: Mobile-first approach
- Animaciones: Transiciones suaves CSS3

## 🚀 Deployment

Para desplegar en producción:

```bash
# Compilar
npm run build

# Subir la carpeta 'dist' a tu servidor
# O usar Vercel/Netlify:
# npm install -g vercel
# vercel
```

## 📝 Notas de Desarrollo

- Los datos se obtienen en tiempo real de Firestore
- Los loaders mostram mientras se cargan los datos
- Las órdenes se guardan con timestamp automático
- El carrito se maneja con Context API (sin localStorage)
- Implementar localStorage si se requiere persistencia entre sesiones

## 👨‍💻 Autor

Malagra Mariano

## 📄 Licencia

Proyecto educativo - CoderHouse

---

**¿Preguntas?** Revisa los componentes documentados en el código fuente.
