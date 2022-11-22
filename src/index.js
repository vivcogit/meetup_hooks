import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./Home";
import { Ref } from "./Ref";
import { StateBase } from "./StateBase";
import { StateDouble } from "./StateDouble";
import { EffectOnMount } from "./EffectOnMount";

export function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/ref" exact component={Ref} />
        <Route path="/state-base" exact component={StateBase} />
        <Route path="/state-double" exact component={StateDouble} />
        <Route path="/effect-on-mount" exact component={EffectOnMount} />

        <Route path="/effect-on-change" exact component={StateBase} />
        <Route path="/effect-subscription" exact component={StateBase} />
        <Route path="/effect-prev-value" exact component={StateBase} />
        <Route path="/memo-base" exact component={StateBase} />
        <Route path="/no-memo-example" exact component={StateBase} />
        <Route path="/callback" exact component={StateBase} />
        <Route path="/callback" exact component={StateBase} />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
