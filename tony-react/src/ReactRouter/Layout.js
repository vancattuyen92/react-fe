import React from 'react'
import { Redirect } from 'react-router-dom';

function Layout({ children }) {
  const isAuth = true;

  if(isAuth) return <>{children}</>

  return <Redirect to="/login" />
  
}

export default Layout
