const { Producto } = require("./domain");

function aumentarPrecioBase(productos, monto) {
  productos.forEach((producto) => {
    producto.precioBase = producto.precioBase + monto;
  });
}

function aumentarPrecioBaseMap(productos, monto) {
  return productos.map((p) => new Producto(p.nombre, p.precioBase + monto));
}

function precioMasAlto(productos) {
  const preciosProductos = productos.map((p) => p.precioFinal());
  return Math.max(...preciosProductos);
}

function productosMasBaratosQue(productos, precioMaximo) {
  return productos.filter((p) => p.precioFinal() <= precioMaximo);
}

function obtenerSumaTotalPrecios(productos) {
  return productos.reduce((precioAnterior, productoActual) => {
    return precioAnterior + productoActual.precioFinal();
  }, 0);
}

function ordenarListaProductos(productos) {
  productos.sort((p1, p2) => {
    return p1.precioFinal() - p2.precioFinal();
  });
}

module.exports = {
  aumentarPrecioBase,
  aumentarPrecioBaseMap,
  precioMasAlto,
  productosMasBaratosQue,
  obtenerSumaTotalPrecios,
  ordenarListaProductos,
};
