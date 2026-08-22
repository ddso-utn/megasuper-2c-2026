import { Producto } from "./domain.js";

export function aumentarPrecioBase(productos, monto) {
  productos.forEach((producto) => {
    producto.precioBase = producto.precioBase + monto;
  });
}

export function aumentarPrecioBaseMap(productos, monto) {
  return productos.map((p) => new Producto(p.nombre, p.precioBase + monto));
}

export function precioMasAlto(productos) {
  const preciosProductos = productos.map((p) => p.precioFinal());
  return Math.max(...preciosProductos);
}

export function productosMasBaratosQue(productos, precioMaximo) {
  return productos.filter((p) => p.precioFinal() <= precioMaximo);
}

export function obtenerSumaTotalPrecios(productos) {
  return productos.reduce((precioAnterior, productoActual) => {
    return precioAnterior + productoActual.precioFinal();
  }, 0);
}

export function ordenarListaProductos(productos) {
  productos.sort((p1, p2) => {
    return p1.precioFinal() - p2.precioFinal();
  });
}

export function productoMasCaro(productos) {
  return productos.reduce((masCaro, productoActual) => {
    return productoActual.precioFinal() > masCaro.precioFinal()
      ? productoActual
      : masCaro;
  });
}
