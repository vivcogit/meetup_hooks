import React, { useState } from "react";
import { Link } from "react-router-dom";

export const StateTrbl = () => {
  const [state, setState] = useState(0);

  function double() {
    setState(state + 1)
    setState(state + 1)
    setState(state + 1)
  }

  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>useState usage example</h1>
      <button onClick={() => setState(state - 1)}>-</button>
      State value: {state}
      <button onClick={double}>+</button>
    </div>
  );
};
