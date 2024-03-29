const notMatchPassword = () => {
  Swal.fire({
    icon: "error",
    title: 'Password not match, try again!',
    showConfirmButton: false,
    timer: 3700,
  });
};

const successUpdated = () => {
  Swal.fire({
    icon: "success",
    title: `Your password has been updated`,
    showConfirmButton: false,
    timer: 3700,
  });
};

const updatePassword = async (id) => {
 
  const password = document.getElementById("password").value;
  const newpassword = document.getElementById("newpassword").value;
  const body = { password, newpassword };

  console.log(body);

  fetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if(!res.ok){
      return notMatchPassword();
    }
    successUpdated();
    location.href = "/login";
  })
    
};

