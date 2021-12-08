const nameInput = document.querySelector("#name");
const description = document.querySelector("#description");
const btn = document.querySelector("button");
const personsWrapper = document.querySelector(".result");
const modal = document.querySelector(".modal-message");
const modalBtn = document.querySelector(".modal-btn");

const toggleModal = () => {
  modal.classList.toggle("toggle-modal");
};

const validateInputs = () => {
  if (
    nameInput.value.trim().length === 0 &&
    description.value.trim().length === 0
  ) {
    console.log("falsy name and description");
    return false;
  } else if (nameInput.value.trim().length === 0) {
    console.log("falsy name");
    return false;
  } else if (description.value.trim().length === 0) {
    console.log("Falsy description");
    return false;
  } else {
    return true;
  }
};

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
  if (validateInputs()) {
    createPostRequest(nameInput.value, description.value);
    createUser(nameInput.value, description.value);
    nameInput.value = "";
    description.value = "";
    toggleModal();
  } else {
    return;
  }
};

const showFetchedPeople = (array) => {
  array.map((obj) => {
    const { name, description } = obj;
    createUser(name, description);
  });
};

const createPostRequest = (nameValue, descriptionValue) => {
  // POST request using fetch()
  fetch("http://localhost:5000/api/v1/users", {
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
      name: nameValue,
      description: descriptionValue,
    }),
    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())
    // Displaying results to console
    .then((json) => console.log(json));
};

fetch("http://localhost:5000/api/v1/users")
  .then((res) => res.json())
  .then((data) => showFetchedPeople(data));

btn.addEventListener("click", handleFormSubmit);
modalBtn.addEventListener("click", toggleModal);
