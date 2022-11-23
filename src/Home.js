import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Table of content:</h1>

      <ul className="list">
        <li>
          <Link to="/ref">useRef example</Link>
        </li>
        <li>
          <Link to="/state-base">useState base</Link>
        </li>
        <li>
          <Link to="/state-double">useState double increment</Link>
        </li>
        <li>
          <Link to="/effect-on-mount">useEffect on mount</Link>
        </li>
      </ul>
    </div>
  );
};
