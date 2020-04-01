var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

let products = [
  { name: "IronBubble-head", unitPrice: 25 },
  { name: "Markus", unitPrice: 5 }
];

// console.log(document.getElementsByClassName('pu')[0].innerText); //access price. Index needed to reach nested element <span>
// console.log(document.getElementsByTagName('input')); //access ALL <input> elements and creates HTML 'array'
// console.log(document.getElementsByTagName('input')[1]); // access specific <input> element.
// console.log(document.getElementsByTagName('input')[0].getAttribute('value')); //Type/value/min are ATTRIBUTES of <input>
// console.log(document.getElementsByClassName('pu'));

let pricesArr = document.getElementsByClassName("pu");
//console.log(pricesArr);
let newProductsArr = document.getElementsByClassName("new");
//console.log(newProductsArr);
let subtotalArr = document.getElementsByClassName("subtot");
//console.log(subtotalArr);
let subtotal = document.getElementsByClassName("subtot")[0].innerText;

function updateSubtotal($product) {
  let product = document.getElementsByClassName("name");
  //console.log(product);
  let priceUnit = parseInt(
    document.getElementsByClassName("pu")[0].innerText.slice(1)
  ); // This returns a string beginning with $ so use parseInt()&price.slice(2) //.slice(1); don't seem to need .slice() if use parseInt()?
  //console.log(priceUnit);
  let quantity = document
    .getElementsByTagName("input")[0]
    .getAttribute("value");
  //console.log(quantity);
  let subtotal = "$" + parseInt(priceUnit * quantity);
  //console.log(subtotal);
  let updateSubtotal = document.getElementsByClassName("subtot");
  //console.log(updateSubtotal);
  updateSubtotal = document.createTextNode(subtotal); // I can't get the subtotal field to update in the DOM :/
  //console.log(updateSubtotal);
}
//ADD PRODUCT
function addProduct(productName, priceUnit) {
  var createProductBtn = document.getElementById("create"); //console.log(createProductBtn);
  createProductBtn.onclick = function() {
    let productTable = document.getElementById("cart");
    let row = productTable.insertRow(3);
    let productName = row.insertCell(0);
    let productUnitePrice = row.insertCell(1);
    productName.innerHTML = "";
    productUnitePrice.innerHTML = "$" + "number";
    if ((productName = "IronBubble-head")) {
    }
  };

  //   let rows = document.getElementById("cart").rows.length;
  //   let priceEachProduct = document.getElementById("cart").rows[1].cells[3]
  //     .innerText;
  //console.log(priceEachProduct);
  // for (i=1; i < rows.length-1; i++) {
  //  console.log(rows[i].cell[1]);
  // }
  //document.getElementById('cart').rows[1].cells[3].innerText = subtotal
  //return subtotal = priceEachProduct;
  //var x = document.getElementById("myTable").rows[0].cells.length;

  //price = products[i].unitPrice;
  //console.log(price);   //  for (let i=0; i<products.length; i++) {
  //   products.unitPrice[i].innerText
  // }
  // });
}

function calculateAll() {
  //  let sumPrice = 0;
  updateSubtotal();
  addProduct();
  //  for(product in cart){
  //  updateSubtotal(product);
  // }

  //let totalPrice = document.getElementsByTagName('h2');
  //console.log(totalPrice);
  //let subtotal = 0;
  //totalPrice = subtotal;
  //  for (let i=0; i<products.length; i++) {
  //   products.unitPrice[i].innerText
  // }

  // for (product of products) {
  //   product.unitPrice =
  // }
  // for (const item of todoListItems) {
  //   item.innerText = item.innerText.toUpperCase();
  // }
}

$calc.onclick = calculateAll;

// for (i = 0; i < products.length; i++) {
//   let price = parseInt(document.querySelector('.pu span').innerText);
//   let quantity = parseInt(document.querySelector('.qty label input').value); //access like an object
//   let subtotal = products[i].unitPrice*quantity;
