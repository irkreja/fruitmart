import React from "react";
import { render } from "react-dom";

// import css
import "./css/style.css";

// import components
import Router from "./components/Router";

if (document.getElementById("root")) {
  render(<Router />, document.querySelector("#root"));
}
