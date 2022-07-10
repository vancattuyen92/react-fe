import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  todos: state.todo.todos
})

function Todos({ todos }) {

  return (
    <div>
    {todos.map(todo => (
      <div>
        Title: {todo.title} <br />
        Author: {todo.author} <br />
        --------------- <br/>
      </div>
    ))}    
    </div>
  )
}

export default connect(mapStateToProps)(Todos)
