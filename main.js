const nameInput = document.querySelector("#name");
const description = document.querySelector("#description");
const btn = document.querySelector("button");
const personsWrapper = document.querySelector(".result");

fetch("http://localhost:5000/api/v1/users")
  .then((res) => res.json())
  .then((data) => console.log(data));

const createUser = (name, description) => {
  const personDiv = document.createElement("div");
  personDiv.classList.add("person");

  const firstP = document.createElement("p");
  firstP.innerText = name;

  const icon = document.createElement("i");
  icon.classList.add("fas");
  icon.classList.add("fa-user");

  const secondP = document.createElement("p");
  secondP.innerText = description;

  personDiv.append(firstP, icon, secondP);
  personsWrapper.append(personDiv);
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  createUser(nameInput.value, description.value);
  nameInput.value = "";
  description.value = "";
};

btn.addEventListener("click", handleFormSubmit);
