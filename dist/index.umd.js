(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-dom'), require('react-router-dom-noslash')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-dom', 'react-router-dom-noslash'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.sayHello = {}, global.React, global.ReactDOM, global.reactRouterDomNoslash));
})(this, (function (exports, React, ReactDOM, reactRouterDomNoslash) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var React__namespace = /*#__PURE__*/_interopNamespace(React);
    var ReactDOM__namespace = /*#__PURE__*/_interopNamespace(ReactDOM);

    const Compare = (a, b) => {
        const status = a === b ? "is okay" : `should be #${b}`;
        return React__namespace.createElement("h2", null, `#${a} ${status}.`);
    };
    const Content = () => {
        const { pathname } = reactRouterDomNoslash.useLocation();
        const [to1, to2] = ["", "a=b"];
        console.log({ loc: reactRouterDomNoslash.useLocation() });
        return (React__namespace.createElement(React__namespace.Fragment, null,
            React__namespace.createElement(reactRouterDomNoslash.Link, { to: to1 },
                "Go to #",
                to1),
            React__namespace.createElement("br", null),
            React__namespace.createElement(reactRouterDomNoslash.Link, { to: to2 },
                "Go to #",
                to2),
            React__namespace.createElement(reactRouterDomNoslash.Routes, null,
                React__namespace.createElement(reactRouterDomNoslash.Route, { path: to1, element: Compare(pathname, to1) }),
                React__namespace.createElement(reactRouterDomNoslash.Route, { path: to2, element: Compare(pathname, to2) }))));
    };

    function App() {
        return (React__namespace.createElement("div", { className: "App" },
            React__namespace.createElement(reactRouterDomNoslash.HashRouter, { basename: "" },
                React__namespace.createElement(Content, null))));
    }

    const render = (id) => {
        const rootElement = document.getElementById(id);
        ReactDOM__namespace.render(React__namespace.createElement(React__namespace.StrictMode, null,
            React__namespace.createElement(App, null)), rootElement);
    };

    exports.render = render;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
