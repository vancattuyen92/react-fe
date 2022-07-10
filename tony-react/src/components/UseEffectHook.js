import React, { useEffect, useState } from 'react'

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [todos, setTodos]  = useState([])

  function handleResize() {}

  // only rune once time
  useEffect(() => {
    console.log("effect hook")
    // fetch('https://tony-json-server.herokuapp.com/api/todos')
    // .then(res => res.json())
    // .then(data => {
    //   setTodos(data.data)
    // })
    window.addEventListener('resize', () => handleResize)

    async function fetchData() {
      // You can await here
      const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
      const data = await res.json();
      setTodos(data.data)
    }
    fetchData();

    return () => {
      console.log("clean up function")
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // watch re-run useEffect
  useEffect(() => {
    if(count > 5) {
      // something
      console.log('useEffect count > 5: ', count)
    }
  },[count])

  return (
    <div>
      Todo Lists
      <ul>
        {todos.length > 0 ? todos.map(todo => {
          return (
            <li key={todo.id}>{todo.title}</li>
          )
        }) : <div>no data</div>}
      </ul>

      <button type="button" onClick={() => setCount(prevState => prevState + 1)}>count</button>
    </div>
  )
}

export default UseEffectHook
