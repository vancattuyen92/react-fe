import * as actionsTypes from './types';

export const initialState = {
  counter: 0,
  isLoading: false,
  isSuccess: false,
  isDisabled: false
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionsTypes.INCREMENT: {
      return {
        ...state, // copy all property object
        counter: state.counter + 1
      }
    }
    case actionsTypes.DECREMENT: {
      return {
        ...state, // copy all property object
        counter: state.counter - 1
      }
    }
    case actionsTypes.PLUS_FIVE: {
      return {
        ...state, // copy all property object
        counter: state.counter + 5
      }
    }
    case actionsTypes.PLUS_TEN: {
      return {
        ...state, // copy all property object
        counter: state.counter + 10
      }
    }
    case actionsTypes.SET_LOADING: {
      return {
        ...state, // copy all property object
        isLoading: action.payload
      }
    }
    case actionsTypes.SET_SUCCESS: {
      return {
        ...state, // copy all property object
        isSuccess: action.payload
      }
    }
    case actionsTypes.SET_DISABLED: {
      return {
        ...state, // copy all property object
        isDisabled: action.payload
      }
    }
    case actionsTypes.RESET_COUNTER: {
      return {
        ...state, // copy all property object
        counter: 0
      }
    }
    default:
      return state
  }
}
