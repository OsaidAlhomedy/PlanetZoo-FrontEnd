import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

function LogoutButton() {
  const { isAuthenticated, logout } = useAuth0();

  return (
      <a onClick={() => {
        logout({ returnTo: window.location.origin });
      }}>
        Log out
      </a>
    )
}

export default LogoutButton;
