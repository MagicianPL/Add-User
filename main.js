import users from "./data/users.js";
console.log(users);

const nameInput = document.querySelector("#name");
const description = document.querySelector("#description");
const btn = document.querySelector("button");

const handleFormSubmit = (e) => {
  e.preventDefault();
};

btn.addEventListener("click", handleFormSubmit);
