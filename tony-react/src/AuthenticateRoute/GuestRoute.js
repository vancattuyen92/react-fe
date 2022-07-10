import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function GuestRoute({ isAuth, component: Component, ...rest}) {
  return (
    <Route 
      {...rest}
      render={props => {
        return isAuth ? <Redirect to="/authenticate" /> : <Component {...props} /> 
      }}
    />
  )
}

export default GuestRoute
