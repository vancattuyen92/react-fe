import React, { useState } from 'react'

function Login() {
  return (
    <div>
      this is login component
    </div>
  )
}

function Logout() {
  return (
    <div>
      this is logout component
    </div>
  )
}

function ConditionRender() {
  const [todos] = useState([1,2,3,4,5]);
  const [isAuth] = useState(true);
  let componetAuth = null;

  if(isAuth) {
    componetAuth = <Logout />
  } else {
    componetAuth = <Login />
  }

  function renderButton() {
    return (
      <div>
        this is function button
      </div>
    )
  }

  return (
    <div>
      {todos.length > 0 && todos.map(todo => {
        return (
          <div key={todo}>
            item {todo}
          </div>
        )
      })}

      <h3>Inline If-Else</h3>
      {isAuth ? <Logout /> : <Login />}
      {componetAuth}
      {renderButton()}

      <button type="button">toggle authen</button>
    </div>
  )
}

export default ConditionRender
