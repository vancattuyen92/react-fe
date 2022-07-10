import React from 'react';
import {Redirect, Route} from 'react-router-dom';

// context
import { useStateApp } from 'context/AppContext';

export default function AuthGuard({ component: Component, ...rest }) {
  const { isUser } = useStateApp();
  
  return (
    <Route
      {...rest}
      render={props => {
        return isUser ? <Component {...props}/> : <Redirect to="/login"/>
      }}
    />
  )
}