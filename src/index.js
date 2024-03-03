import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './utils/AuthProvider';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <AuthProvider
  >
    <App />
  </AuthProvider>,
  document.getElementById('root')
);

// reportWebVitals(); // Only include if you are using it for performance monitoring
