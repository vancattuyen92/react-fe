import React from 'react'

const initialTodos = [
  {
    id: 1,
    text: 'learn react',
    isDone: true
  },
  {
    id: 2,
    text: 'learn javascript',
    isDone: false
  }
]

function TodoItem({ todo, toggleId }) {
  return (
    <li>
      {todo.text} <button type="button" onClick={() => toggleId(todo.id)}>Submit</button>
    </li>
  )
}

export default function LifitingStateUp() {
  const [todos] =  React.useState(initialTodos)

  function toggleId(todoId) {
    console.log('toggleId: ', todoId)
  }

  return (
    <div>
      this is lifiting state up
      <ul>
        {todos.map(todo => {
          return (
            <TodoItem key={todo.id} todo={todo} toggleId={toggleId} />
          )
        })}
      </ul>
    </div>
  )
}
