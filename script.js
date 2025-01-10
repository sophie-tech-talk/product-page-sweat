const productImage = document.getElementById("product");
const colorProduct = document.getElementById("color");

document.getElementById("btn-black").onclick = function () {
  productImage.src = "img/sweat-black.png";
  colorProduct.innerHTML = "NOIR";
};

document.getElementById("btn-beige").onclick = function () {
  productImage.src = "img/sweat-beige.png";
  colorProduct.innerHTML = "BEIGE";
};

document.getElementById("btn-brown").onclick = function () {
  productImage.src = "img/sweat-brown.png";
  colorProduct.innerHTML = "MARRON";
};
