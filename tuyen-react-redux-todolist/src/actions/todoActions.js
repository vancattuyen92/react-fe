// action types 
export const FETCH_TODO_SUCCESS = 'TODO/FETCH_TODO_SUCCESS'
export const ADD_TODO = 'TODO/ADD_TODO'

export const fetchTodos = (todos) => ({
    type: FETCH_TODO_SUCCESS,
    payload: todos
}) 

export const addTodos = (todos) => ({
    type: ADD_TODO,
    payload: todos
})