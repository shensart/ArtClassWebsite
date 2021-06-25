import React from "react";
import { Route, IndexRoute } from "react-router";

/**
 * Import all page components here
 */
import App from "./App";
import Classes from "./Classes";
import Workshop from "./Workshop";

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={App} />
    <Route path="/workshop" component={Workshop} />
    <Route path="/classes" component={Classes} />
  </Route>
);
