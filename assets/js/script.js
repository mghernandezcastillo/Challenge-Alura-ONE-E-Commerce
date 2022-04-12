// creating products

const starWarsSection = document.querySelector("#star-wars");

const requestURL = ".../../assets/data/productsData.json";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();
request.onload = function () {
  const products = request.response;

  // create products
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    console.log(product.price);
    createProductItem(product, starWarsSection);
  }
};
