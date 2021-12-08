import * as React from "react";
import { Content } from "./content"
import { HashRouter } from "react-router-dom-noslash";

export default function App() {
  return (
    <div className="App">
      <HashRouter basename="">
        <Content/>
      </HashRouter>
    </div>
  );
}

