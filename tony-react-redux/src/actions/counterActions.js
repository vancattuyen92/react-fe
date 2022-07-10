// TYPES
export const SET_INCREMENT = 'COUNTER/SET_INCREMENT';
export const SET_DECREMENT = 'CONTER/SET_DECREMENT';

// ACTION CREATORS
export function setIncrement(data) {
  return {
    type: SET_INCREMENT,
    payload: data
  }
}

export const setDescrement = data => ({
  type: SET_DECREMENT,
  payload: data
})  