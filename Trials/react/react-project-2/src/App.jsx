import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleCountClick() {
    setCount((count) => count + 1);

    setCount((count) => count + 1);

    console.log("In component:", count)
  }

  return (
    <div>
      <button style={{ fontSize: 20 }} onClick={handleCountClick}>
        Clicks: {count}
      </button>
    </div>
  );
}

export default App;
