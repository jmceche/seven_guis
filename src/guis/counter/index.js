import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <input type='number' value={count} />
      <button onClick={handleClick}>Count</button>
    </div>
  );
};

export default Counter;
