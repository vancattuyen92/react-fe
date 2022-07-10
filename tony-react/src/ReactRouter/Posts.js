import React from 'react'
import { Link } from 'react-router-dom';

function Posts() {
  return (
    <div>
      <Link to="/post/1">Post 1</Link>
      <Link to="/post/2">Post 2</Link>
      <Link to="/post/3">Post 3</Link>
    </div>
  )
}

export default Posts
