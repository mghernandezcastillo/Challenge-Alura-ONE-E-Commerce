// CREATE PRODUCT

function createProductItem(product, section) {
  // imagen
  let productImage = document.createElement("article");
  productImage.classList.add("product__image");
  let productImg = document.createElement("img");
  productImg.src = product.image;
  productImg.alt = product.title;

  // append imagen
  productImage.appendChild(productImg);

  // titulo
  let productTitle = document.createElement("article");
  productTitle.classList.add("product__title");
  let productTitleText = document.createElement("h2");
  productTitleText.innerText = product.title;
  // append titulo
  productTitle.appendChild(productTitleText);

  // precio
  let productPrice = document.createElement("article");
  productPrice.classList.add("product__price");
  let productPriceText = document.createElement("span");
  productPriceText.innerText = product.price;
  // append precio
  productPrice.appendChild(productPriceText);

  // botón
  let productButton = document.createElement("article");
  productButton.classList.add("product__button");
  let productButtonText = document.createElement("a");
  productButtonText.innerText = "Ver producto";
  productButtonText.href = `/components/products/product${product.id}.html`;
  // append boton
  productButton.appendChild(productButtonText);

  // append to section
  section.appendChild(productImage);
  section.appendChild(productTitle);
  section.appendChild(productPrice);
  section.appendChild(productButton);
}
