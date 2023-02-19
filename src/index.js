import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
*  This is the entry point for the React application.
*  ReactDOM.render() is used to render the App component to the DOM.
*  The App component is defined in the src/App.js file.
*  The document.getElementById('root') is used to find the element with the id of 'root' in the index.html file.
*  The index.html file is located in the public directory.
*/
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
