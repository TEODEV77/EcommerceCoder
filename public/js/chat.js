const client = io();

client.on("get-messages", (list) => {
  const chat = document.getElementById("messages");
  chat.innerHTML = "";
  list.forEach((message) => {
    const user = document.querySelector('span');
    const article = document.createElement("article");
    if (message.user == user.innerText) {
      article.innerHTML = `<p>
     <strong> ${message.message} <ins> <== ${message.user} </ins> </strong> </p>`;
    } else {
      article.innerHTML = `<p><strong><ins> ${message.user} ==> </ins></strong>
      ${message.message} </p>`;
    }
    chat.appendChild(article);
  });
});

const sendMessage = (user) => {
  const inputMessage = document.getElementById("txtMessage");
  const userMessage = { user, message: inputMessage.value };
  client.emit("messages", userMessage);
};
