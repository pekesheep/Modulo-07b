// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;
// Entrada.
var products = [
  {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
  },
  {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
  },
  {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
  },
  {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
  },
  {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
  },
];

//Hay mucho que pulir porque el control de entrada de si los input valen 0 o no, no está bien del todo.
//Si haces un test metiendo valores y borrando se vuelve loco el programa :'(

var showProducts = (productList) => {
  var container = document.getElementById("product-list-container");
  var inputContainer = document.getElementById("product-input-container");

  var createProduct = (product) => {
    var description = document.createElement("div");
    var quantity = document.createElement("input");

    description.innerText = `${product.description} - ${product.price} €/ud.`;

    description.setAttribute("class", "product-list-description");
    quantity.setAttribute("type", "number");
    quantity.setAttribute("class", "product-input");
    quantity.addEventListener("change", (event) => {
      product.units = event.target.valueAsNumber;

      document.getElementById("button-calculate").disabled =
        product.units == 0 ? true : false;
    });

    container.appendChild(description);
    inputContainer.appendChild(quantity);
  };

  for (var product of productList) {
    createProduct(product);
  }
};

showProducts(products);

var calcTotal = (productList) => {
  var allSubtotal = 0;
  var allTaxes = 0;
  var allTotal = 0;
  var subtotal = 0;
  var taxes = 0;
  var total = 0;

  for (var product of productList) {
    var subtotal = product.units * product.price;
    var taxes = (subtotal * product.tax) / 100;
    var total = subtotal + taxes;

    allSubtotal = allSubtotal + subtotal;
    allTaxes = allTaxes + taxes;
    allTotal = allTotal + total;
  }
  document.getElementById("subtotal").innerHTML = allSubtotal.toFixed(2) + "€";
  document.getElementById("taxes").innerHTML = allTaxes.toFixed(2) + "€";
  document.getElementById("total").innerHTML = allTotal.toFixed(2) + "€";
};
// product.units == 0 ? 0 : product.units;
// var disableButton = product.units == 0 ? true : false;
// document.getElementById("button-calculate").disabled = disableButton;
