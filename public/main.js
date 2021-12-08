const nameInput = document.querySelector("#name");
const description = document.querySelector("#description");
const btn = document.querySelector("button");
const personsWrapper = document.querySelector(".result");
const modal = document.querySelector(".modal-message");
const modalBtn = document.querySelector(".modal-btn");
const errorName = document.querySelector(".error-name");
const errorDesc = document.querySelector(".error-desc");

//hiding and displaying modal with a message
const toggleModal = () => {
  modal.classList.toggle("toggle-modal");
};

const validateInputs = () => {
  if (
    nameInput.value.trim().length === 0 &&
    description.value.trim().length === 0
  ) {
    errorName.style.visibility = "visible";
    errorDesc.style.visibility = "visible";
    return false;
  } else if (nameInput.value.trim().length === 0) {
    errorName.style.visibility = "visible";
    return false;
  } else if (description.value.trim().length === 0) {
    errorDesc.style.visibility = "visible";
    return false;
  } else {
    errorName.style.visibility = "hidden";
    errorDesc.style.visibility = "hidden";
    return true;
  }
};

//creating person div - it is append to DOM
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
  errorName.style.visibility = "hidden";
  errorDesc.style.visibility = "hidden";
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

//displaying people from fetched array
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

fetch("https://add-user-node.herokuapp.com/api/v1/users")
  .then((res) => res.json())
  //mapping through fetched array in a function
  .then((data) => showFetchedPeople(data));

btn.addEventListener("click", handleFormSubmit);
modalBtn.addEventListener("click", toggleModal);
