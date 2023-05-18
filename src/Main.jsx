import React from "react";
import Landing from "./Landing";
import App from "./App";
import {Route, Link, Routes } from "react-router-dom";

function Main() {
  return (
    <Routes>
      <Route path="/" Component={Landing} >
      </Route>
      <Route path="/app" Component={App} />
    </Routes>
  );
}

export default Main;
