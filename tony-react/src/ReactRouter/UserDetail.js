import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({});
  const { id } = useParams();


  useEffect(() => {
    async function fetchUsers() {
      setIsLoading( true)
      const result = await fetch(`https://tony-json-server.herokuapp.com/api/users/${id}`);
      const data = await result.json();
      setUser(data?.data || {})
      setIsLoading(false)
    }
    fetchUsers();
  }, [id])

  if(isLoading) return <div>Loading ...</div>

  return (
    <div>
      <br />
      {Object.keys(user).length > 0 ? (
        <div>
          <img src={user.avatar} alt="" />
          <br />
          Email: {user.email}
        </div>
      ) : <div>No data available</div>}
    </div>
  )
}
