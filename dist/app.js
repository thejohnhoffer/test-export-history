import * as React from "react";
import { Content } from "./content";
import { HashRouter } from "react-router-dom-noslash";
export default function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(HashRouter, { basename: "" },
            React.createElement(Content, null))));
}
//# sourceMappingURL=app.js.map