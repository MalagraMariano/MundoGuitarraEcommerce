# 🚀 Script para Cargar Productos a Firestore

## Descripción
Script que carga automáticamente los 12 productos del catálogo a la base de datos Firestore.

## ¿Qué hace?
1. **Limpia** la colección existente de productos
2. **Carga** todos los 12 productos del archivo `products.js`
3. **Muestra** estadísticas de la carga (cantidad, categorías, precios, stock)

## ¿Cómo ejecutarlo?

### Opción 1: Desde la raíz del proyecto
```bash
node src/scripts/seedFirestore.js
```

### Opción 2: Con npm (si agregas script en package.json)
Primero, agrega esto a tu `package.json` en la sección `"scripts"`:
```json
"seed": "node src/scripts/seedFirestore.js"
```

Luego ejecuta:
```bash
npm run seed
```

## Requisitos
✅ Firebase debe estar configurado en `src/firebase.js` (ya está configurado)  
✅ Conexión a Internet (para conectarse a Firestore)  
✅ Node.js instalado (con soporte para módulos ES6)

## ¿Qué datos se cargan?

Se cargan 12 productos en categorías:
- **Guitarras**: Stratocaster Classic, Les Paul Custom, Telecaster Vintage
- **Bajos**: Jazz Master, Precision, Fretless
- **Ukeleles**: Soprano, Tenor
- **Pedales**: Distorsion, Delay
- **Teclados**: 88 Teclas, Sintetizador

Cada producto tiene:
- Nombre
- Categoría
- Precio
- Descripción
- URL de imagen
- Stock disponible

## Salida esperada

```
🚀 Iniciando carga de productos a Firestore...

📋 Limpiando productos existentes...
✅ Colección limpiada

📦 Cargando productos...
✅ Stratocaster Classic (ID: abc123...)
✅ Les Paul Custom (ID: def456...)
✅ Telecaster Vintage (ID: ghi789...)
... (9 productos más)

🎉 ¡Carga completada!

📊 Estadísticas:
   - Productos cargados: 12/12
   - Categorías: guitarras, bajos, ukelele, pedales, teclados
   - Stock total: 144 unidades
   - Precio mínimo: $150
   - Precio máximo: $2500
```

## Notas importantes

⚠️ **El script borra productos existentes** antes de cargar los nuevos
- Si necesitas preservar datos, edita la sección de limpieza en el script

✅ **IDs automáticos**: Firestore asigna IDs únicos automáticamente a cada documento

✅ **Puedes ejecutarlo varias veces**: La limpieza inicial evita duplicados

## Troubleshooting

**Error: "Cannot find module"**
→ Asegúrate de ejecutar desde la raíz del proyecto

**Error: "Permission denied"**
→ Verifica que tu cuenta Firebase tenga permisos de escritura en Firestore

**Error: "Network error"**
→ Verifica tu conexión a Internet

## ¿Qué pasa después?

Una vez ejecutado el script:
1. Los productos estarán en Firestore
2. Tu aplicación React los obtendrá automáticamente
3. La tienda mostrará el catálogo completo

¡Listo para vender! 🎸
