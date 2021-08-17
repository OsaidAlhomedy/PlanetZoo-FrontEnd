import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Footer from "./components/Footer";
import "./Test.css";
import { withAuth0 } from "@auth0/auth0-react";
import loadingGIF from "./assets/loading.gif";
import Header from "./components/Header";
import Blog from "./components/Blogs";
import Profile from "./components/Profile";
import Home from "./components/Home";
import GiveAnimal from "./components/GiveAnimal";

import Adoption from "./components/Adoption";

import Donate from "./components/Donate";

class Test extends Component {
  render() {
    const { isLoading, error, isAuthenticated } = this.props.auth0;
    return isLoading ? (
      <div className="text-center">
        <img className="loadingImg" src={loadingGIF} alt="loading" />
      </div>
    ) : error ? (
      <h2>Oops... {error.message}</h2>
    ) : (
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/blog">
            <Header />
            <Blog />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/donation">
            <Header />
            <Donate />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/adoption">
            <Header />
            <Adoption />
            <Footer />
          </Route>

          <Route exact path="/giveAnimals">
            <Header />
            <GiveAnimal />
            <Footer />
          </Route>
          <Route exact path="/aboutus"></Route>
        </Switch>
      </Router>
    );
  }
}

export default withAuth0(Test);
