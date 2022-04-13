// CREATE PRODUCT

function createProductItem(product, section) {
  // create product item
  const productItem = document.createElement("div");
  productItem.classList.add("product__item");

  // imagen
  let productImage = document.createElement("article");
  let productImg = document.createElement("img");
  productImg.classList.add("product__image");
  productImg.src = product.image;
  productImg.alt = product.title;

  // append imagen
  productImage.appendChild(productImg);

  // titulo
  let productTitle = document.createElement("article");
  let productTitleText = document.createElement("h2");
  productTitleText.classList.add("product__title");

  productTitleText.innerText = product.title;
  // append titulo
  productTitle.appendChild(productTitleText);

  // precio
  let productPrice = document.createElement("article");
  let productPriceText = document.createElement("span");
  productPriceText.classList.add("product__price");
  productPriceText.innerText = product.price;
  // append precio
  productPrice.appendChild(productPriceText);

  // botón
  let productLink = document.createElement("article");
  let productLinkText = document.createElement("a");
  productLinkText.classList.add("product__link");
  productLinkText.innerText = "Ver producto";
  productLinkText.href = `/components/products/product${product.id}.html`;
  // append boton
  productLink.appendChild(productLinkText);

  // append to product item
  productItem.appendChild(productImage);
  productItem.appendChild(productTitle);
  productItem.appendChild(productPrice);
  productItem.appendChild(productLink);

  // append to section
  section.appendChild(productItem);
}
