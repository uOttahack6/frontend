// src/utils/LoginButton.js
import React from 'react';
import { Button } from 'reactstrap'; // Import Button from reactstrap
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  return (
    <Button color="success" onClick={handleLogin}>Login</Button>
  );
};

export default LoginButton;
