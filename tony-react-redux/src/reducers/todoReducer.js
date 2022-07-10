import * as todoActions from '../actions/todoActions';

// state
const initialState = {
  isLoading: false,
  todos: [],
  errorMsg: ''
}

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case todoActions.FETCH_TODO_START: {
      return {
        ...state,
        isLoading: true
      }
    }
    case todoActions.FETCH_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload,
        isLoading: false
      }
    }
    case todoActions.FETCH_TODO_FAILURE: {
      return {
        ...state,
        errorMsg: `Can't load todos. Please check server`,
        isLoading: false
      }
    }
    default: {
      return state
    }
  }
}

// export to use 
export default reducer;