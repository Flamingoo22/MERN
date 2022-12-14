import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App_ConditionalRendering';
// import App from './App_Person';
// import App_Checkbox from './App_Checkbox';
import App_Display from './App_Display';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App_Display />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
