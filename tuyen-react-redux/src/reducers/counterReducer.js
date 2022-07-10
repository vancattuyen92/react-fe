
import * as counterActions from '../actions/counterActions'

// state
const initialState = {
    number: 0
}

// reducers 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case counterActions.SET_INCREMENT: {
            const newNumber = state.number + action.payload
            return {
                ...state,
                number: newNumber
            }
        }
        case counterActions.SET_DECREMENT: {
            const newNumber = state.number - action.payload
            return {
                ...state,
                number: newNumber
            }
        }
        default: {
            return state
        }
    }
}

// export to use 
export default reducer;