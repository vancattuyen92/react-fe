import './App.scss';
import React from 'react'
import Login from './views/login/index'
import Register from './views/register/index';
import Dashboard from './views/dashboard/Dashboard';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>

        <Switch>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/register"><Register /></Route>
          <Route exact path="/dashboard"><Dashboard /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
