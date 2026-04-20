import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set the REACT_APP_CODESPACE_URL from the environment or fallback
if (!process.env.REACT_APP_CODESPACE_URL) {
  // You must set this in your .env file or Codespace environment
  process.env.REACT_APP_CODESPACE_URL = window.location.protocol + '//' + window.location.host.replace('-3000', '-8000');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
