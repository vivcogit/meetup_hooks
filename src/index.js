import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./Home.js";
import { Ref } from "./Ref.js";
import { StateBase } from "./StateBase";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/ref" exact component={Ref} />
          <Route path="/state-base" exact component={StateBase} />
        </div>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
