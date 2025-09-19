//Question 01 - Create a Counter , but max value should be 20 and min value should be 0
//useing useState Hook

import { useState } from "react";

function QCounter() {
  const [counter, setCounter] = useState(0);

  const add = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const remove = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter Value : {counter} </h1>

      <button onClick={add}>Add Value</button>
      <button onClick={remove}>Remove Value</button>
    </>
  );
}

export default QCounter;
