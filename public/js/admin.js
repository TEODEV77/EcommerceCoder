const client = io();

client.on("get-products", (list) => {
  const products = document.getElementById("products");
  products.innerHTML = "";
  list.docs.forEach((productItem) => {
    const article = document.createElement("article");
    article.style =
      "display: flex; flex-direction: row; justify-content: space-between;";
    article.innerHTML = `${productItem.title}
      <button onclick="deleteProduct('${productItem._id}')" > Delete </button>`;
    products.appendChild(article);
  });
});

const updateProduct = (idProduct, body) => {
  const endpoint = `/api/products/${idProduct}`;

  fetch(endpoint, {
    method: "PUT",
    body: JSON.stringify({ body }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      successAddToCart(pid);
    })
    .catch((err) => {
      errAddToCart();
    });
};

const deleteProduct = (idProduct) => {
  const endpoint = `/api/products/${idProduct}`;

  fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      onProducts();
    })
    .catch((err) => {
      console.log(err);
    });
};

onProducts();
