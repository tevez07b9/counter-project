import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./Counter";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);
