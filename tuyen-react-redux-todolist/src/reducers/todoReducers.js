import * as todoActions from '../actions/todoActions';

// state 
const initialState = {
    todos: [],
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
        case todoActions.ADD_TODO: {
            return [
                ...state,
                {
                    title: action.title,
                    author: action.author,
                    status: action.status
                }
            ]
        }
        default: {
            return state
        } 
    }
}

export default reducer;