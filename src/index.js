import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Addproduct from "./components/AddProduct/Addproduct"; //the path is underlined, but it runs, if not go to the lowest directory, it cannot run...
import Signupuser from "./components/SignUpUser/Signupuser";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Sign In</h1>
    <Signupuser />
    <hr></hr>
    <h1>Add Product</h1>
    <Addproduct />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
