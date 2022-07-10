import { useState, useEffect, useRef } from 'react';

function App() {
  const [todos, setTodos] = useState([]); 
  const [page, setPage] = useState(1);
  const spinnerRef = useRef();
  
  async function fetchTodos(_page) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_start=${_page}&_limit=10`);
    const data = await res.json();
    setTodos(prevState => [...prevState, ...data]);
  }

  useEffect(() => {
    fetchTodos(page);
  }, [page])

  // infinite scroll
  function handleLoadMore(entries) {
    const entry = entries[0];
    if(!entry.isIntersecting) return;
    setPage(prevState => prevState + 1);
  }

  useEffect(() => {
    if(!spinnerRef.current) return;
    let observerRefValue = null;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };
    const observer = new IntersectionObserver(handleLoadMore, options);
    observer.observe(spinnerRef.current);
    observerRefValue = spinnerRef.current;

    return () => {
      if(observerRefValue) {
        observer.unobserve(observerRefValue)
      }
    }
  }, [])

  return (
    <div className="container">
      {todos.map(todo => (
        <>
          <br />
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
            </div>
          </div>
        </>
      ))}

      <div ref={spinnerRef} style={{ textAlign: 'center', margin: 20 }}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default App;
