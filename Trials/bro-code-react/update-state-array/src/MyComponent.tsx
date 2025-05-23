import React, { useState } from 'react'

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAdddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood])
    }

    function handleRemoveFood(index) {
        setFoods(f => f.filter((_, i) => i !== index))

    }
  return (
    <div>
        <h2>List of food</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick = {() => handleRemoveFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name'/>
        <button onClick = {handleAdddFood} >Add Food</button>
    </div>
  )
}

export default MyComponent