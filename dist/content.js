import * as React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom-noslash";
const Compare = (a, b) => {
    const status = a === b ? "is okay" : `should be #${b}`;
    return React.createElement("h2", null, `#${a} ${status}.`);
};
const Content = () => {
    const { pathname } = useLocation();
    const [to1, to2] = ["", "a=b"];
    console.log({ loc: useLocation() });
    return (React.createElement(React.Fragment, null,
        React.createElement(Link, { to: to1 },
            "Go to #",
            to1),
        React.createElement("br", null),
        React.createElement(Link, { to: to2 },
            "Go to #",
            to2),
        React.createElement(Routes, null,
            React.createElement(Route, { path: to1, element: Compare(pathname, to1) }),
            React.createElement(Route, { path: to2, element: Compare(pathname, to2) }))));
};
export { Content };
//# sourceMappingURL=content.js.map