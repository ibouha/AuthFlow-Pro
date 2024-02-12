import React from "react";
const Container = ({ children }) => {
  return React.createElement(
    "div",
    { className: "mx-auto w-full max-w-7xl" },
    children
  );
};

export default Container;
