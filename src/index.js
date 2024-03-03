import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { AuthProvider } from './utils/AuthProvider';
import reportWebVitals from './reportWebVitals';
import "./Navbar.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AuthProvider>,
  document.getElementById('root')
);

// reportWebVitals(); // Only include if you are using it for performance monitoring
