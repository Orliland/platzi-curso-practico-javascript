function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function ejecutarPrecioConDescuento() {
  const inputPrice = document.getElementById("inputPrice").value;
  const inputDiscount = document.getElementById("inputDiscount").value;

  const precioConDescuento = calcularPrecioConDescuento(
    inputPrice,
    inputDiscount
  );

  const resultP = document.getElementById("resultP");
  resultP.innerHTML = `Precio Con Descuento <span>$${precioConDescuento}</span>`;
}
