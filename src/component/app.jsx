import React, { Component } from "react";
import Counter from "./counter";
import Home from "./home";
import Login from "./login";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" exact={true} component={Login} />
          <Route path="/counter" exact={true} component={Counter} />
        </Switch>
      </Router>
    );
  }
}

export default App;
