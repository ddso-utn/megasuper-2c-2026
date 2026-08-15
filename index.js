const {
  Producto,
  DescuentoFijo,
  DescuentoPorcentual,
  DescuentoPorCantidad,
} = require("./domain.js");

const {
  aumentarPrecioBaseMap,
  precioMasAlto,
  aumentarPrecioBase,
  productosMasBaratosQue,
  obtenerSumaTotalPrecios,
  ordenarListaProductos,
} = require("./funciones.js");

const carrito = [];

let p1 = new Producto("Coca-cola", 1000, 3);
p1.agregarDescuento(new DescuentoPorCantidad(3, 100));

let p2 = new Producto("Papas lays", 2000, 1);

carrito.push(p1);
carrito.push(p2);

const nuevoCarrito = aumentarPrecioBaseMap(carrito, 100);
console.log("El carrito con los precios actualizados: ");
console.log(nuevoCarrito);

//aumentarPrecioBase(carrito, 200);

console.log("Carrito original: ");
console.log(carrito);

console.log("El precio mas alto es: ", precioMasAlto(carrito));

console.log("PRODUCTOS MAS BARATOS QUE 1500:");
const bebidas = [
  new Producto("Cocacola", 1000, 1),
  new Producto("7up", 2000, 1),
  new Producto("Jugo", 1500, 1),
  new Producto("Agua", 700, 1),
];

console.log(productosMasBaratosQue(bebidas, 1500));

console.log("El precio final es: ", obtenerSumaTotalPrecios(bebidas));

console.log("ORDENAMOS LA LISTA: ");
ordenarListaProductos(bebidas);
console.log(bebidas);
