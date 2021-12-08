import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./app";

const render = (id) => {
  const rootElement = document.getElementById(id);
  ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
  rootElement
  );
}

export {render}
