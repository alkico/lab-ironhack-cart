let $cart = document.querySelector("#cart tbody");
let $calc = document.getElementById("calc");
let $create = document.querySelector("#create");
let oldProduct = document.querySelector("#cart > tbody > tr:nth-child(1)");
const cloneProductRow = oldProduct.cloneNode(true); //true for a deep copy inc. nested elements
let productList = document.querySelectorAll("#cart > tbody > tr");

function updateSubtotal(product) {
  let priceUnit = product.querySelector("td.pu > span").innerHTML;
  let quantity = product.querySelector("td.qty input").value;
  let subtotalDiv = product.querySelector("td.subtot span");
  subtotalDiv.innerHTML = priceUnit * quantity;
  return priceUnit * quantity;
}

function addProduct() {
  let createNewDiv = document.querySelector("#cart > tfoot > tr");
  let productName = createNewDiv.querySelector(
    "td:nth-child(1) > input[type=text]"
  ).value;
  let productPrice = document.querySelector(
    "td:nth-child(2) > input[type=number]"
  ).value;
  let newProduct = cloneProductRow.cloneNode(true);
  cloneProductRow.appendChild(newProduct);

  newProduct.querySelector("td.name > span").innerHTML = productName;
  newProduct.querySelector("td.pu > span").innerHTML = productPrice;
  deleteOnClick(newProduct);
  $cart.appendChild(newProduct);
}

function calculateAll() {
  let totalPrice = 0;
  //Note: can't use productList here because it won't include newly added products in the calc (b/c defined before their creation)
  document.querySelectorAll("#cart > tbody > tr").forEach((product) => {
    totalPrice += updateSubtotal(product);
  });
  document.querySelector("body > h2 > span").innerHTML = totalPrice.toString();
}

function deleteOnClick(product) {
  product.querySelector(".rm > button").onclick = function () {
    document.querySelector("#cart > tbody").removeChild(product);
  };
}

productList.forEach((product) => {
  deleteOnClick(product);
});

$calc.onclick = calculateAll;
$create.addEventListener("click", addProduct);

//PRACTICE TARGETTING ELEMENTS AND SPECIFIC ITEMS
// console.log(document.getElementsByClassName('pu')[0].innerText); //To access price. Index needed to reach nested element <span>
// console.log(document.getElementsByTagName('input')); //access ALL <input> elements and creates HTML 'array'
// console.log(document.getElementsByTagName('input')[1]); // access specific <input> element.
// console.log(document.getElementsByTagName('input')[0].getAttribute('value')); //Type/value/min are ATTRIBUTES of <input>

// Get HTML arrays of elements:
// let pricesArr = document.getElementsByClassName("pu");
// let newProductsArr = document.getElementsByClassName("new");
// let subtotalArr = document.getElementsByClassName("subtot");
// let subtotal = document.getElementsByClassName("subtot")[0].innerText;

//LESSONS:
// Target specific span(element) using querySelector not getElements (unless it's an id selector in which case it's same same)
//Use querySelector to target rows rather than Class
//use querySelector when trying to target one element
