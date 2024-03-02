import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider
    domain="dev-q5cxatome4mralfv.us.auth0.com"
    clientId="ufiJfge4Wq9AW8yLprDy1592yO7LLyVN"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// reportWebVitals(); // Only include if you are using it for performance monitoring
