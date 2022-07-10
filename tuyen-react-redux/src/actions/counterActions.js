// ACTION TYPES
export const SET_INCREMENT = 'COUNTER/SET_INCREMENT';
export const SET_DECREMENT = 'COUNTER/SET_DECREMENT';

// ACTION CREATORS
export const setIncrement = data => {
    return {
        type: SET_INCREMENT,
        payload: data
    }
}

export const setDecrement = data => ({
    type: SET_DECREMENT,
    payload: data
})

