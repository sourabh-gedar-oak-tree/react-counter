import React, {useState} from "react";

function Counter(props) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <center>
        <div>
      <h3>Hello from Counter</h3>
      <div>
        <button onClick={handleDecrement}>-</button>
        <h5>Count is {count}</h5>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
    </center>
  );
}

export default Counter;
