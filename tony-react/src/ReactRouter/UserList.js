import React from 'react';
import { useHistory } from 'react-router';

export default function User({ users }) {
  const history = useHistory();
  return (
    <ul className="user_list">
      {users.map(user => (
        <li>
          <div>First Name: {user.firstName}</div>
          <div>Last Name: {user.lastName}</div>
          <div>Email: {user.email}</div>
          <div>Role: {user.operator}</div>
          <br />
          <div><button type="button" onClick={() => history.push(`/user/${user.id}`)}>View Detail</button></div>
        </li>
      ))}
    </ul>
  )
}
