document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("heading");
    const changeColorBtn = document.getElementById("changeColorBtn");
    const newItemInput = document.getElementById("newItem");
    const addItemBtn = document.getElementById("addItemBtn");
    const itemList = document.getElementById("itemList");

    // Change background color on button click
    changeColorBtn.addEventListener("click", () => {
        document.body.style.backgroundColor = getRandomColor();
    });

    // Add new item to the list
    addItemBtn.addEventListener("click", () => {
        const newItemText = newItemInput.value.trim();
        if (newItemText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = newItemText;
            itemList.appendChild(listItem);
            newItemInput.value = ""; // Clear input field
        }
    });

    changeColorBtn.addEventListener("click", () => {
        heading.textContent = "Background Color Changed!";
    });
     

    // Generate a random color
    function getRandomColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});
