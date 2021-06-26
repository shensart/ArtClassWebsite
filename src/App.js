import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./MainPage";
import Workshop from "./Workshop";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/classes" component={Workshop} />
          {/* <Route component={Error} /> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
