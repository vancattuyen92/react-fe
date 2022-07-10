import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

// styles
import './index.css';

// views
import App from './App';
import Login from 'views/Login';

ReactDOM.render(
  <Router>
    <Route path="/login" component={Login} />
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
