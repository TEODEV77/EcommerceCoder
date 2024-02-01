export const requiredFields = (payload) => {
  return {
    title: "All fields required",
    got: {
      firstName: payload.firstName,
      lastName: payload.lastName,
      role: payload.role,
      email: payload.email,
      password: payload.password ? "*******" : payload.password,
      age: payload.age,
      cart: payload.cart,
    },
    expected: {
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        password: "",
        age: 0,
        cart: "",
      },
  };
};


