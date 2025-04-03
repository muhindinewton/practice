// Event Listeners
// Listen for form submission to handle adding a new animal
document.querySelector("#animal-form").addEventListener("submit", handleSubmit);

// Event Handlers
// Handle form submission, create an animal object, and send it to the database
function handleSubmit(e) {
  e.preventDefault();
  let animalObj = {
    name: e.target.name.value,
    imageUrl: e.target.image_url.value,
    description: e.target.description.value,
    donations: 0,
  };
  renderOneAnimal(animalObj);

  // Send the new animal to the database
  adoptAnimal(animalObj);

  // Render the new animal on the page
  renderOneAnimal(animalObj);

  // reset the form fields after submission
  e.target.reset();
}

//DOM render function
// Render a single animal card to the DOM
function renderOneAnimal(animal) {
  // build animal
  let card = document.createElement("li");
  card.className = "card";
  card.innerHTML = `
    <img src= "${animal.imageUrl}">
    <div class="content">
        <h4>${animal.name}</h4>
        <p>
            $<span class="donation-count">${animal.donations}</span> Donated
        </p>
        <p>${animal.description}</p>
    </div>
    <div class="button-container">
    <button id = 'donate'>Donate $10</button>
    <button id= 'set_free'>Set free</button>

    </div>
   `;

      // Add event listener for the donate button to update donations
  card.querySelector("#donate").addEventListener("click", () => {
    animal.donations += 10;
    card.querySelector("span").textContent = animal.donations;
    updateDonation(animal);
  });

      // Add event listener for the set free button to remove the animal card and delete it from the database
  card.querySelector("#set_free").addEventListener("click", () => {
    card.remove();
    deleteAnimal(animal.id);
  });

  // add animal card to DOM
  document.querySelector("#animal-list").appendChild(card);
}

//Fetch requests
//Get fetch for all animal resources
function getAllAnimals() {
  fetch("http://localhost:3000/animalData")
    .then((res) => res.json())
    .then((animalData) =>
      animalData.forEach((animal) => renderOneAnimal(animal))
    );
}

// Send a POST request to add a new animal to the database
function adoptAnimal(animalObj) {
  fetch("http://localhost:3000/animalData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animalObj),
  })
    .then((res) => res.json())
    .then((animal) => console.log(animal));
}

// Send a PATCH request to update the donation amount for an animal
function updateDonation(animalObj) {
  fetch(`http://localhost:3000/animalData/${animalObj.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(animalObj),
  })
    .then((res) => res.json())
    .then((animal) => console.log(animal));
}

// Send a DELETE request to remove an animal from the database
function deleteAnimal(id) {
  fetch(`http://localhost:3000/animalData/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((animal) => console.log(animal));
}

//Initial render
// Get data and render our animals too the DOM
function initialize() {
  getAllAnimals();
  // animalData.forEach(animal => renderOneAnimal (animal))
}
initialize();
