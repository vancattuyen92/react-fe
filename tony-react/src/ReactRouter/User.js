import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import UserList from './UserList';

export default function User() {
  const location= useLocation();
  const history = useHistory();
  const queryString = new URLSearchParams(location.search)
  const page = queryString.get('_page') || 1;
  const limit = queryString.get('_limit') || 2;
  // States
  const [users, setUsers] = useState([]);
  const [pagination, setPagination] = useState(0)

  async function fetchUsers(currentPage) {
    const result = await fetch(`https://tony-json-server.herokuapp.com/api/users?_page=${currentPage}&_limit=${limit}`);
    const data = await result.json();
    const totalPage = Math.ceil(data.pagination.totalCount / limit)
    setUsers(data?.data || [])
    setPagination(totalPage)
  }

  useEffect(() => {
    fetchUsers(page);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  function handlePagination(page) {
    history.replace({
      pathname: '/user',
      search: `?_page=${page}&_limit=${limit}`,
    })
    fetchUsers(page);
  } 

  return (
    <div>
      <div className="user_mode">
        <h2>Users</h2>
        <button type="button">List View</button>
        <button type="button">Grid View</button>
      </div>
      
      <UserList users={users} />

      <br />
      <div className="pagination">
        Pagination:
        {pagination > 0 && Array.from({length: pagination}, (_, i) => i + 1).map(number => (
          <div key={number}>
            <button 
              type="button"
              style={{ color: Number(page) === number ? 'red' : 'black'}}
              onClick={() => handlePagination(number)}
            >
              {number}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
