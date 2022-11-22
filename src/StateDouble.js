import React, { useState } from "react";
import { Link } from "react-router-dom";

export const StateDouble = () => {
  const [state, setState] = useState(0);

  const doubleIncrement = () => {
    setState(state + 1);
    setState(state + 1);
  };

  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>useState usage example</h1>
      <button onClick={() => setState(state - 1)}>-</button>
      State value: {state}
      <button onClick={doubleIncrement}>+2</button>
    </div>
  );
};
