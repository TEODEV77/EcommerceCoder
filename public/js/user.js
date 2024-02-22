const updatePassword = async (id) => {
 
  const password = document.getElementById("password").value;
  const newpassword = document.getElementById("newpassword").value;
  const body = { password, newpassword };

  fetch(`/api/users/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
