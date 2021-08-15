import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import "./Test.css";
import { withAuth0 } from "@auth0/auth0-react";
import loadingGIF from "./assets/loading.gif";
import Header from "./components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Home from "./Home";
import Logout from "./components/Logout"


class Test extends Component {
  render() {
    const { isLoading, error } = this.props.auth0;
    const {isAuthenticated}=this.props.auth0;
    return isLoading ? (
      <div className="text-center">
        <img className="loadingImg" src={loadingGIF} alt="loading" />
      </div>
    ) : error ? (
      <h2>Oops... {error.message}</h2>
    ) : (
      <Router>
        {/* <Login/> */}
        <Switch>
          <Route exact path="/" >
            {isAuthenticated ? <Header /> : <Login/> }
            <Footer/>
            
     </Route>
          <Route exact path="/home">
            <Home/>
            <Footer/>
           </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default withAuth0(Test);
