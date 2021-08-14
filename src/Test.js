import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./Test.css";

class Test extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />;
            </Route>
          </Switch>
        </Router>
        ;
      </>
    );
  }
}

export default Test;
