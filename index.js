import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
export * from "./components";
export * from "./helpers";
export * from "./hook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>Hello world</div>
);
