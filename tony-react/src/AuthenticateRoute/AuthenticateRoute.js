import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';

import User from './components/User';
import Login from './components/Login';
import AuthRoute from './AuthRoute';
import GuestRoute from './GuestRoute';

function AuthenticateRoute() {
  const [isAuth, setIsAuth] = useState(false);

  // function handleLogin() {
  //   setIsAuth(true)
  // }

  // function handleLogout() {
  //   setIsAuth(false)
  // }

  function handleAuth() {
    if(!isAuth) {
      setIsAuth(true)
      return
    }
    setIsAuth(false)
  }

  return (
    <div>
      <br />
      <h3>Example Authenticate Route</h3>

      <button 
        type="button" 
        // onClick={isAuth ? handleLogout : handleLogin}
        onClick={handleAuth}
      >
        {isAuth ? 'Logout' : 'Login'}
      </button>
      <br /><br />
      {isAuth ? 'You are logined' : 'Please login...'}
      <br /><br />

      <Link to="/authenticate/user">User</Link> | 
      <Link to="/authenticate/login">Login</Link>
      <br /><br />
      --------------------------
      <h3>Page</h3>
      
      <GuestRoute exact path="/authenticate/login" isAuth={isAuth} component={Login} />
      <AuthRoute exact path="/authenticate/user" isAuth={isAuth} component={User} />
      
    </div>
  )
}

export default AuthenticateRoute
