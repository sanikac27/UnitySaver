import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx'; // Ensure this matches the location of App.tsx
import reportWebVitals from './reportWebVitals.ts'; // Ensure this matches the location of reportWebVitals.ts


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
