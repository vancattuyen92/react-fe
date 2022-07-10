import React, { useEffect } from 'react';

function Dashboard() {

   useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('http://localhost:3005/api/user', {
          method: 'GET'
        });
        const data = await res.json();
        console.log('fetch users: ', data)
      } catch(err) {

      }
      
    }

    fetchUsers();
  }, [])

  return (
    <div >
        this is Dashboard
    </div>
  )
}

export default Dashboard
