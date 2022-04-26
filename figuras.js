// Código del cuadrado
const resultP = document.getElementById("resultP");

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//  Código del circulo

function diametroCirculo(radio) {
  return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
  return diametroCirculo(radio) * PI;
}

function areaCirculo(radio) {
  return radio * radio * PI;
}

// Interactuamos con el HTML

function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado").value;

  const perimetro = perimetroCuadrado(input);
  resultP.innerHTML = `El perimetro de tu cuadrado es <span>${perimetro} cm</span>`;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado").value;

  const area = areaCuadrado(input);
  resultP.innerHTML = `El area de tu cuadrado es <span>${area} cm<sup>2</sup></span>`;
}

function calcularPerimetroTriangulo() {
  const input1 = Number(document.getElementById("inputTriangulo1").value);
  const input2 = Number(document.getElementById("inputTriangulo2").value);
  const input3 = Number(document.getElementById("inputTriangulo3").value);

  const perimetro = perimetroTriangulo(input1, input2, input3);
  resultP.innerHTML = `El perimetro de tu triangulo es <span>${perimetro} cm</span>`;
}

function calcularAreaTriangulo() {
  const base = document.getElementById("inputTriangulo1").value;
  const altura = document.getElementById("inputTriangulo4").value;

  const area = areaTriangulo(base, altura);
  resultP.innerHTML = `El area de tu triangulo es <span>${area} cm<sup>2</sup></span>`;
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("inputCirculo").value;

  const perimetro = perimetroCirculo(input);
  resultP.innerHTML = `La circunferencia de tu circulo es <span>${perimetro} cm</span>`;
}

function calcularAreaCirculo() {
  const input = document.getElementById("inputCirculo").value;

  const area = areaCirculo(input);
  resultP.innerHTML = `El area de tu circulo es <span>${area} cm<sup>2</sup></span>`;
}

function selectFigure(figure) {
  const forms = document.getElementsByClassName("form");
  const buttons = document.getElementsByClassName("select__item");
  const buttonToSelected = document.getElementById("select__" + figure);
  const formToShow = document.getElementById("form__" + figure);
  for (let fig of forms) {
    fig.classList.remove("active");
    fig.classList.add("deactive");
  }

  for (let btn of buttons) {
    btn.classList.remove("selected");
  }

  formToShow.classList.add("active");
  formToShow.classList.remove("deactive");
}
