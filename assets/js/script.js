// creating products

const starWarsSection = document.querySelector("#star-wars");
const consolasSection = document.querySelector("#consolas");
const diversosSection = document.querySelector("#diversos");
// DISPLAY PRODUCTS IN HTML
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

async function getProductsData() {
  const Http = new XMLHttpRequest();
  const url = ".../../assets/data/productsData.json";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(Http.responseText);
      const products = data;
      console.log(products);

      if (window.innerWidth <= 768) {
        displayProductsByCategory(products, starWarsSection, "star wars", 4);
        displayProductsByCategory(products, consolasSection, "consolas", 4);
        displayProductsByCategory(products, diversosSection, "diversos", 4);
      }

      // for desktop devices
      if (window.innerWidth > 768) {
        displayProductsByCategory(products, starWarsSection, "star wars", 6);
        displayProductsByCategory(products, consolasSection, "consolas", 6);
      }
    }
  };
}

getProductsData();
