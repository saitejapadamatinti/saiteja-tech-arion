import React, { useState } from "react";
import "./index.css";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) => {
      return prevCount + 3;
    });
  };

  const decrementCount = () => {
    setCount((prevCount) => {
      return prevCount - 3;
    });
  };

  return (
    <div className="box">
      <div className="counter">
        <div className="title">
          <h1>Counter</h1>
        </div>
        <div className="countringContainer">
          <button onClick={decrementCount} className="decrement">
            -
          </button>
          <h1>{count}</h1>
          <button onClick={incrementCount} className="increment">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
