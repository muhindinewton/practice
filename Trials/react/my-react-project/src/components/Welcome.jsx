import React, {useState} from "react"; 

const Welcome = ({name}) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Welcome {name}, current count state is {count}</h1>
            <button onClick={() => setCount(count + 1)}> Increase count

            </button>
        </div>
    )
}

export default Welcome;