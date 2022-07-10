import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'

// styles
import './index.scss';

//store
import store from 'stores'

// views
import App from './App';
import Login from 'views/Login';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/login" component={Login} />
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
