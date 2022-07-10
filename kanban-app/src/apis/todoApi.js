export const fetchTodos = async () => {
  const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
      method:'GET',
  })
  const data = await res.json();
  return data
}