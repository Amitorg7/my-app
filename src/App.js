import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Submit from "./components/Submit";
import Todo from "./components/todo/Todo";
import Login from "./components/login/Login";
import Registration from "./components/login/Registration";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
          <Route path="/" exact component={Login} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/todo" exact component={Todo} />
            <Route path="/submit" exact component={Submit} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
