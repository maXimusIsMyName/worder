import React from "react";
import ReactDOM from "react-dom";
import App from "Components/App.js";
import "./index.scss";
import registerSeviceWorker from "./sw";
ReactDOM.render(<App />, document.getElementById("root"));
