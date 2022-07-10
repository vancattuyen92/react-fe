import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function AuthRoute({isAuth, component: Component, ...rest}) {
  console.log('AuthRoute: ', isAuth)

  return (
    <Route 
      {...rest}
      render={props => {
        return isAuth ? <Component {...props} /> : <Redirect to="/authenticate" />
      }}
    />
  )
}

export default AuthRoute
