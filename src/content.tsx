import * as React from "react";
import {
  Routes, Route, Link, useLocation
} from "react-router-dom-noslash";

const Compare = (a, b) => {
  const status = a === b ? "is okay" : `should be #${b}`;
  return <h2>{`#${a} ${status}.`}</h2>;
};

const Content = () => {
  const { pathname } = useLocation();
  const [to1, to2] = ["", "a=b"];
  console.log({ loc: useLocation() });
  return (
    <>
      <Link to={to1}>Go to #{to1}</Link>
      <br />
      <Link to={to2}>Go to #{to2}</Link>
      <Routes>
        <Route path={to1} element={Compare(pathname, to1)} />
        <Route path={to2} element={Compare(pathname, to2)} />
      </Routes>
    </>
  );
};

export { Content };
