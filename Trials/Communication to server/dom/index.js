

// function getAllAnimals() {
//    fetch('http://localhost:3000/animalData') 
//    .then(res => res.json())
//    .then(animalData => animalData.forEach(animal => renderOneAnimal(animals)))
//    console.log('before fetch returns')
// }

// function initialize() {
//     getAllAnimals()
//     console.log('after get all animals')
// }
// initialize()

// function getAllAnimals() {
//     fetch('http://localhost:3000/animalData') 
//     .then(res => res.json())
//     .then(animalData => animalData.forEach(animal => renderOneAnimal(animal))) // Fixed variable name
//     .catch(error => console.error('Error fetching animals:', error));
 
//     console.log('before fetch returns'); 
//  }
 
//  function renderOneAnimal(animal) {
//     console.log('Rendering animal:', animal); // Debugging log

//     let container = document.querySelector('.container');
//     if (!container) {
//         console.error("Container not found in the document.");
//         return;
//     }

//     const animalDiv = document.createElement('div');
//     animalDiv.classList.add('animal-card');

//     // Use the correct property `imageUrl`
//     const imgSrc = animal.imageUrl ? animal.imageUrl : 'https://via.placeholder.com/200';

//     animalDiv.innerHTML = `
//         <h3>${animal.name}</h3>
//         <img src="${imgSrc}" alt="${animal.name}" width="200" onerror="this.src='https://via.placeholder.com/200';">
//         <p>${animal.description}</p>
//     `;

//     container.appendChild(animalDiv);
// }

 
//  function initialize() {
//      getAllAnimals();
//      console.log('after get all animals');
//  }
 
//  initialize();
 
