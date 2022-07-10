import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// styles
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// views
import Register from "views/Register";
import Login from "views/Login";

// guards
import AuthGuard from 'guards/AuthGuard';
import GuestGuard from 'guards/GuestGuard';

// context
import { AppProvider } from 'context/AppContext';

ReactDOM.render(
  <Router>
    <AppProvider>
      <Switch>
        <GuestGuard path="/login" component={Login} />
        <GuestGuard path="/register" component={Register} />
        <AuthGuard path="/" component={App} />
      </Switch>
    </AppProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
