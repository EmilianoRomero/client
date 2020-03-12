import React, { Component } from "react";
import Landing from "./screen/Landing";
import Cities from "./cities";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from "./Container";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route exact path="./screen/Landing" component={Landing} />
              <Route exact path="./cities" component={Cities} />
            </Switch>
            <AppContainer />
        </div>
      </BrowserRouter>
    );
  }
}
