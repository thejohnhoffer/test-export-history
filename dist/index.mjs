import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useLocation, Link, Routes, Route, HashRouter } from 'react-router-dom-noslash';

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

function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(HashRouter, { basename: "" },
            React.createElement(Content, null))));
}

const render = (id) => {
    const rootElement = document.getElementById(id);
    ReactDOM.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)), rootElement);
};

export { render };
