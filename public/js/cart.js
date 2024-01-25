const successAddToCart = (pid) => {
  Swal.fire({
    icon: "success",
    title: `Your product with id: ${pid} has been added`,
    showConfirmButton: false,
    timer: 3700,
  });

};

const test = (shop) => {
  console.log(shop);
  console.log(shop.products);
}


const errAddToCart = () => {
  Swal.fire({
    icon: "error",
    title: `Something Broke !`,
    showConfirmButton: false,
    timer: 3700,
  });
};

const addToCart = async (cid, pid) => {
  const quantity = prompt("Enter quantity");

  fetch(`/api/carts/${cid}/${pid}`, {
    method: "POST",
    body: JSON.stringify({ quantity: parseInt(quantity) }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    
    successAddToCart(pid);
  }).catch((err) => {
    errAddToCart();
  });
    
    
};

const deleteItemFromCart = async (cid, pid) => {

  const endpoint = `/api/carts/${cid}/${pid}`;
 
  fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then( async (res) => {
    location.reload();
  }).catch((err) => {
    errAddToCart();
  });
    
    
};