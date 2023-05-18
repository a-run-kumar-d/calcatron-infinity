import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/index.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
