// event listeners
// syntax => element.addEventListener(`)

/*
Mouse Events => click, mouseover, mouse out
keyboard events => keydown, key up
form events => submit, change
window eventrs => load
*/

// Inline event handler => adding event directly to the html
// javascript property limitation => only one event handler can be assigned to an event
// event lister advantage => we can have diffferent events

//Create an alert
// document.querySelector('#alert').addEventListener('click', () => alert('Hi, I was clicked'))

//log something
// document.querySelector('#log').addEventListener
// ('click', () => alert('Don\'t do that again!'))

//
// Wait for the DOM to load before executing
document.addEventListener('DOMContentLoaded', () => {
    displayDate(); // Show current date on page load

    let form = document.querySelector('#todo_form');
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh
        let todoInput = e.target.new_todo.value.trim();

        if (todoInput === '') {
            alert('Please enter a task!'); // Prevent empty task submission
            return;
        }

        buildToDo(todoInput);
        form.reset(); // Clear input field after submission
    });
});

// Function to create a new task
function buildToDo(todo) {
    let li = document.createElement('li');
    let btn = document.createElement('button');

    btn.addEventListener('click', handleDelete);
    btn.textContent = 'x'; // Delete button icon
    li.textContent = `${todo} `;
    li.appendChild(btn);

    document.querySelector('#tasks').appendChild(li);
}

// Function to delete a task
function handleDelete(e) {
    e.target.parentNode.remove();
}

// Function to display the current date
function displayDate() {
    const today = new Date();
    const dateString = today.toDateString();
    document.getElementById('current-date').innerText = `Today's Date: ${dateString}`;
}
