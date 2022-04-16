// CREATE PRODUCT

function createProductItem(product, section) {
  // create product item
  const productItem = document.createElement("div");
  productItem.classList.add("product__item");

  // imagen
  let productImage = document.createElement("article");
  let productImg = document.createElement("div");
  productImg.classList.add("product__image");
  productImg.style.backgroundImage = `url(${product.image})`;

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

  // descripcion
  let productDescription = document.createElement("article");
  let productDescriptionText = document.createElement("p");
  productDescriptionText.classList.add("product__description");

  productDescriptionText.innerText = product.description;
  // append descripcion
  productDescription.appendChild(productDescriptionText);

  // botón
  let productLink = document.createElement("article");
  let productLinkText = document.createElement("a");
  productLinkText.classList.add("product__link");
  productLinkText.innerText = "Ver producto";
  productLinkText.href = `/assets/html/product.html?id=${product.id}`;
  // append boton
  productLink.appendChild(productLinkText);

  // append to product item
  productItem.appendChild(productImage);
  productItem.appendChild(productTitle);
  productItem.appendChild(productPrice);
  productItem.appendChild(productLink);
  if (section.classList.contains("product")) {
    productItem.appendChild(productDescription);
  }

  // append to section
  section.appendChild(productItem);
}

function displayAllProducts(products, section, limit = products.length) {
  for (let i = 0; i < products.lenght; i++) {
    const product = products[i];
    createProductItem(product, section);
  }
}

function displayProductsByCategory(products, section, category, limit) {
  products = products.filter((product) => product.category === category);

  for (let i = 0; i < limit; i++) {
    const product = products[i];
    if (product.category === category) {
      createProductItem(product, section);
    }
  }
}

function displayProductData(products, productId, section) {
  let productData = products.filter((product) => product.id === productId);
  console.log(productData);
  createProductItem(productData[0], section);
}
