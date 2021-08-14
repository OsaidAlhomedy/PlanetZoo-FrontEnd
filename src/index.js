import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Test from "./Test";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-gyy9agxm.us.auth0.com"
    clientId="ZNFvUYh52Fi74H2ROSbMi1mdSpUN6FAL"
    redirectUri={process.env.REACT_APP_URL}
  >
    {/* <App /> */}
    <Test />
  </Auth0Provider>,
  document.getElementById("root")
);
