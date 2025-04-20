import React, {useState} from "react"; 

const Welcome = ({name}) => {
    const [count, setCount] = useState(0);
    
function handleClick () {
    console.log("BTN is clicked")
}
    return (
        <div>
            <h1>Welcome {name}, current count state is {count}</h1>
            <button onClick={handleClick}> Click me to increase count

            </button>
        </div>
    )
}

export default Welcome;