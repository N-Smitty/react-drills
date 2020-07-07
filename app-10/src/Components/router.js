import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "./Album";
import Details from "./Details";

export default (
    <Switch>
        <Route exact path="/" component={album} />
        <Route path="/details/:id" component={Details} />
    </Switch>
);