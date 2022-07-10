import * as globalActions from '../actions/globalActions'

// state
const initialState = {
    loading: false
}

// reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case globalActions.SET_LOADING: {
            return  {
                ...state,
                loading: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;