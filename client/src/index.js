import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function;
// to log results (for example: reportWebVitals(console.log));
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals;
//for search meme store search input data in a variable and onSubmit event search meme and navigate it;
//use react-toastify from notification;
//made a default link for website
//use axios for send form data;
//for handling authorization error render a new component in place of from;
//handle all non-ligal route by "*";
//i will set token into localstorage.setItem("token",token) and sent it in request header by get toekn from localstroage;
//from this way where we requestion token header will sent automaticlay by get it from localstroge
//and by signout i will delete token from localstroage
//if user will inauthorized then an error page mount and after click on close btn we navigate to "/meme else mount home page"
reportWebVitals();
