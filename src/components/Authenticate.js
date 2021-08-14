import React from "react";
import { Button } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button variant="link" onClick={() => loginWithRedirect()}>Register & Authenticate Now</Button>;
};

export default LoginButton;
