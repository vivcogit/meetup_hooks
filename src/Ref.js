import React, { useRef } from "react";
import { Link } from "react-router-dom";

export const Ref = () => {
  const ref = useRef(0);

  return (
    <div>
      <Link to="/">Go back</Link>

      <h1>useRef usage example</h1>
      <h2>Ref value: {ref.current}</h2>

      <button
        onClick={() => {
          ref.current = 42;
        }}
      >
        Push me!
      </button>
    </div>
  );
};
