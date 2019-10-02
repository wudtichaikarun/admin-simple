import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./core/App";
// import * as serviceWorker from "./serviceWorker";

const root: ?Element = document.getElementById("root");

if (root != null) {
  ReactDOM.render(<App />, root);
  // serviceWorker();
}
