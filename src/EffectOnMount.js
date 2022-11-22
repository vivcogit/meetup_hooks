import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { sleep } from "./utils";

export const EffectOnMount = () => {
  const [width, setWidth] = useState(1);
  const ref = useRef();

  useEffect(() => {
    sleep(10_000);
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div>
      <Link to="/">Go back</Link>
      <h1>useEffect on mount</h1>
      <h2>Width: {width}</h2>

      <div style={{ width: 200, height: 200, background: "red" }} ref={ref} />
    </div>
  );
};
