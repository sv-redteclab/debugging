const usernameInputElement = document.getElementById("username");
const addButtonElement = document.getElementById("add");
const userCountElement = document.getElementById("count");
const showButtonElement = document.getElementById("show");
const userListElement = document.getElementById("list");

const users = [];
let currentCount = 0;

addButtonElement.onclick = () => {
  const name = usernameInputElement.value;
  users[++currentCount] = name;
  userCountElement.innerHTML = currentCount;
};

showButtonElement.onclick = () => {
  userListElement.innerHTML = "";
  for (let index = 0; index < currentCount; ++index) {
    userListElement.innerHTML += `${users[index]} <br>`;
  }
};
