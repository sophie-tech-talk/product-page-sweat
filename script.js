const productImage = document.getElementById("product");
const colorProduct = document.getElementById("color");

document.querySelectorAll(".colors").forEach(
  (color) =>
    (color.onclick = (e) => {
      productImage.src = `img/sweat-${color.dataset.color}.png`;
      colorProduct.innerHTML = color.dataset.color;
    })
);
