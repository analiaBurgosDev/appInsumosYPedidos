// ======== FUNCIONES GENERALES ========
function obtener(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
function guardar(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ======== CAMBIO DE SECCIÓN ========
function mostrarSeccion(id) {
  document.getElementById("insumos").style.display = id === "insumos" ? "block" : "none";
  document.getElementById("pedidos").style.display = id === "pedidos" ? "block" : "none";
}

// ======== INSUMOS ========
function guardarInsumo() {
  const categoria = document.getElementById("categoria").value;
  const nombre = document.getElementById("nombre").value.trim();
  const precio = parseFloat(document.getElementById("precio").value);
  const color = document.getElementById("color").value.trim();

  if (!categoria || !nombre || !precio || !color) {
    alert("Completá todos los campos correctamente");
    return;
  }

  const insumos = obtener("insumos");
  insumos.push({ categoria, nombre, precio, color });
  guardar("insumos", insumos);
  mostrarInsumos();

  document.getElementById("categoria").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("precio").value = "";
  document.getElementById("color").value = "";
}

function mostrarInsumos() {
  const insumos = obtener("insumos");
  const categorias = {
    "materia prima": document.getElementById("lista-materia-prima"),
    "accesorios": document.getElementById("lista-accesorios"),
    "herramientas": document.getElementById("lista-herramientas")
  };

  Object.values(categorias).forEach(ul => ul.innerHTML = "");

  insumos.forEach((insumo, i) => {
    const li = document.createElement("li");
    li.textContent = `${insumo.nombre} - $${insumo.precio} - ${insumo.color}`;
    const btn = document.createElement("button");
    btn.textContent = "🗑️";
    btn.onclick = () => borrarInsumo(i);
    li.appendChild(btn);
    categorias[insumo.categoria]?.appendChild(li);
  });
}

function borrarInsumo(i) {
  const insumos = obtener("insumos");
  insumos.splice(i, 1);
  guardar("insumos", insumos);
  mostrarInsumos();
}

// ======== PEDIDOS ========
function guardarPedido() {
  const pedido = {
    fecha: document.getElementById("fecha-pedido").value,
    cliente: document.getElementById("cliente").value.trim(),
    producto: document.getElementById("producto-pedido").value.trim(),
    cantidad: parseInt(document.getElementById("cantidad").value),
    entrega: document.getElementById("fecha-entrega").value,
    seña: parseFloat(document.getElementById("seña").value) || 0,
    saldo: parseFloat(document.getElementById("saldo").value) || 0,
    medidas: document.getElementById("medidas").value.trim(),
    estado: document.getElementById("estado").value,
    comentarios: document.getElementById("comentarios").value.trim()
  };

  if (!pedido.fecha || !pedido.cliente || !pedido.producto || !pedido.cantidad) {
    alert("Completá los campos obligatorios");
    return;
  }

  const pedidos = obtener("pedidos");
  pedidos.push(pedido);
  guardar("pedidos", pedidos);
  mostrarPedidos();

  document.querySelectorAll("#pedidos input, #pedidos textarea, #pedidos select").forEach(el => el.value = "");
}

function mostrarPedidos() {
  const lista = document.getElementById("lista-pedidos");
  const pedidos = obtener("pedidos").sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  lista.innerHTML = pedidos.map((p, i) => `
    <li>
      <strong>${p.fecha}</strong> — ${p.cliente} pidió ${p.cantidad} ${p.producto} (${p.estado})
      <br>Entrega: ${p.entrega} | Seña: $${p.seña} | Saldo: $${p.saldo}
      <br><em>${p.comentarios}</em>
      <div>
        <button onclick="editarPedido(${i})">✏️</button>
        <button onclick="borrarPedido(${i})">🗑️</button>
      </div>
    </li>
  `).join("");
}

function borrarPedido(i) {
  const pedidos = obtener("pedidos");
  pedidos.splice(i, 1);
  guardar("pedidos", pedidos);
  mostrarPedidos();
}

function editarPedido(i) {
  const pedidos = obtener("pedidos");
  const p = pedidos[i];
  if (!p) return;

  document.getElementById("fecha-pedido").value = p.fecha;
  document.getElementById("cliente").value = p.cliente;
  document.getElementById("producto-pedido").value = p.producto;
  document.getElementById("cantidad").value = p.cantidad;
  document.getElementById("fecha-entrega").value = p.entrega;
  document.getElementById("seña").value = p.seña;
  document.getElementById("saldo").value = p.saldo;
  document.getElementById("medidas").value = p.medidas;
  document.getElementById("estado").value = p.estado;
  document.getElementById("comentarios").value = p.comentarios;

  pedidos.splice(i, 1);
  guardar("pedidos", pedidos);
  mostrarPedidos();
}

// ======== INICIALIZACIÓN ========
mostrarInsumos();
mostrarPedidos();
