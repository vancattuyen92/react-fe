
import * as todoActions from '../actions/todoActions'

// state
const initialState = {
    todos: [],
    todoId: null,
    todoItem: {}
}

// reducers 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case todoActions.FETCH_TODO_SUCCESS: {
            return {
                ...state,
                todos: action.payload
            }
        }
        case todoActions.FETCH_SINGLETODO: {
            return {
                ...state,
                todoId: action.payload
            }
        }
        case todoActions.ADD_TODO: {
            const newTodos = [...state.todos, action.payload]
            return {
                ...state,
                todos: newTodos
            }
        }
        case todoActions.GET_TODO_ITEM: {
            return {
                ...state,
                todoItem: action.payload
            }
        }
        default: {
            return state
        }
    }
}

// export to use 
export default reducer;