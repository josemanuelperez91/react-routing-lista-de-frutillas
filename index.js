import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Conditions from "./components/conditions/Conditions";
import Dashboard from "./components/dashboard/Dashboard";
import Detail from "./components/detail/Detail";

import "./style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/conditions" component={Conditions} />
          <Route path="/detail/:ID" component={Detail} />
          <Route component={Conditions} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
