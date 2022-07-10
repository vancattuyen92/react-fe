// actions types
export const FETCH_TODO_START = 'TODO/FETCH_TODO_START';
export const FETCH_TODO_SUCCESS = 'TODO/FETCH_TODO_SUCCESS';
export const FETCH_TODO_FAILURE = 'TODO/FETCH_TODO_FAILURE';

export const fetchTodosStart = () => ({
  type: FETCH_TODO_START,
})

export const fetchTodosSuccess = (todos) => ({
  type: FETCH_TODO_SUCCESS,
  payload: todos
})

export const fetchTodosFailure = () => ({
  type: FETCH_TODO_FAILURE,
})


export const loadTodos = () => async  (dispatch) => {
  dispatch(fetchTodosStart());
  // code logic fetch api
  try {
    const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
    const data = await res.json();
    // fetchTodos(data.data);
    dispatch(fetchTodosSuccess(data.data));

    // do something call another api
  } catch(e) {
    dispatch(fetchTodosFailure());
  }
}