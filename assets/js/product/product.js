const productSection = document.querySelector(".product");

function getProductId() {
  if (localStorage.getItem("productId") === null) {
    const urlParams = new URLSearchParams(window.location.search);
    localStorage.setItem("productId", urlParams.get("id"));
    const productId = localStorage.getItem("productId");
    return productId;
  } else {
    const productId = localStorage.getItem("productId");
    return productId;
  }
}

async function getProductsData() {
  const Http = new XMLHttpRequest();
  const url = "assets/data/productsData.json";
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(Http.responseText);
      const products = data;

      if (window.innerWidth <= 768) {
        displayProductData(products, getProductId(), productSection);
      }

      // for desktop devices
      if (window.innerWidth > 768) {
        displayProductData(products, getProductId(), productSection);
      }
    }
  };
}

getProductsData();
