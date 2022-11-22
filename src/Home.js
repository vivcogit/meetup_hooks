import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to="/ref">useRef example</Link>
      <br />
      <Link to="/state-base">useState base</Link>
      <br />
      <Link to="/state-double">useState double increment</Link>
      <br />
      <Link to="/effect-on-mount">useEffect on mount</Link>
    </div>
  );
};
