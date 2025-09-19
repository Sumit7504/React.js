//Hook
//useState

import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Counter Value : {counter}</h1>

      <button onClick={addValue}>Add value </button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default Counter;
