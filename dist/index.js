import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
const render = (id) => {
    const rootElement = document.getElementById(id);
    ReactDOM.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)), rootElement);
};
export { render };
//# sourceMappingURL=index.js.map