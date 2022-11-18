import React, { useState } from "react";
import { Link } from "react-router-dom";

export const StateBase = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>useState usage example</h1>
      <button onClick={() => setState(state - 1)}>-</button>
      State value: {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  );
};
