import { setLoading } from './globalActions';

// action types
export const FETCH_TODO_SUCCESS = 'TODO/FETCH_TODO_SUCCESS'
export const FETCH_SINGLETODO = 'TODO/FETCH_SINGLETODO'
export const ADD_TODO = 'TODO/ADD_TODO'
export const FETCH_TODO_START = 'TODO/FETCH_TODO_START'
export const FETCH_TODO_FAILURE = 'TODO/FETCH_TODO_FAILURE' 
export const FETCH_TODO_DETAIL = 'TODO/FETCH_TODO_DETAIL'
export const GET_TODO_ITEM = 'TODO/GET_TODO_ITEM'

export const getTodoItem = (item) => ({
    type: GET_TODO_ITEM,
    payload: item
}) 
export const fetchTodos = (todos) => ({
    type: FETCH_TODO_SUCCESS,
    payload: todos
})

export function fetchSingleTodo(todoId) {
    return {
        type: FETCH_SINGLETODO,
        payload: todoId
    }
}
export function addTodo(todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}


export const fetchTodosStart = () => ({
    type: FETCH_TODO_START,
})

export const fetchTodosFailure = () => ({
    type: FETCH_TODO_FAILURE,
})
export const loadTodos = () => async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(fetchTodosStart());
    // code logic fetch api
    try {
        
        const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
        const data = await res.json();
        // fetchTodos(data.data)
        dispatch(fetchTodos(data.data))
        

        // do something call another api
    } catch(e) {
        dispatch(fetchTodosFailure())
    }
    dispatch(setLoading(false))
}

export const todosDetail = () => async (dispatch,getState) => {
    const todoId = getState().todo.todoId
    console.log('todoIDDDD', todoId)
    try {
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`)
        const data = await res.json()
        dispatch(getTodoItem(data.data))
    } catch(e) {
        // dispatch(fetchTodosFailure())
    }
}

