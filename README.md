# 🧵 App de Gestión Artesanal

Aplicación web sencilla (PWA-friendly) para la gestión de **insumos** y **pedidos** en un emprendimiento de productos artesanales.

Permite registrar y controlar materiales, accesorios y herramientas utilizadas en la producción, así como llevar un registro de los pedidos de clientes, con fechas, estados y comentarios.

---

## 🌟 Características principales

### 📦 Módulo de Insumos
- Carga de **insumos** divididos en tres categorías:
  - Materia prima  
  - Accesorios  
  - Herramientas  
- Cada insumo incluye:
  - Nombre  
  - Precio  
  - Color  
- Se pueden **listar**, **borrar** o **vaciar completamente** las listas por categoría.  
- Los datos se almacenan en `localStorage`, por lo que **se conservan aunque se cierre el navegador**.

---

### 📝 Módulo de Pedidos
- Registro de pedidos con los siguientes campos:
  - Fecha del pedido  
  - Nombre del cliente  
  - Producto artesanal (campo de texto libre)  
  - Cantidad  
  - Fecha de entrega  
  - Seña y saldo restante  
  - Medidas  
  - Estado: `por empezar`, `en proceso`, `finalizado`  
  - Comentarios  
- Los pedidos se listan **ordenados por fecha**.  
- Se pueden **editar o eliminar** fácilmente.  
- Toda la información también se guarda en `localStorage`.

---


---

## ⚙️ Tecnologías utilizadas

- **HTML5**
- **CSS3**
- **JavaScript puro (Vanilla JS)**
- **localStorage** para persistencia de datos
- Estructura **PWA-ready** (puede adaptarse fácilmente para uso offline)

---




## 🗂️ Estructura del proyecto

