import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home"
import Nav from "./components/Nav/Nav"
import Champions from "./components/Champions/Champions"
import ChampDesc from "./components/ChampDesc/ChampDesc"

export default (
    <Switch>
<Route component={Home} exact path="/" />
<Route component={Nav} exact path="/nav" />
<Route component={Champions} exact path="/champs" />
<Route component={ChampDesc} exact path="/description" />
        </Switch>
)