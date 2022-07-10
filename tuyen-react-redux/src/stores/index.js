import {combineReducers,createStore, applyMiddleware} from 'redux'
import counterReducer from '../reducers/counterReducer'
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk'


import todoReducers from '../reducers/todoReducers'
import globalReducer from '../reducers/globalReducer'

const rootReducers = combineReducers ({
    counter: counterReducer,
    todo: todoReducers,
    global: globalReducer
})
const store = createStore(rootReducers, composeWithDevTools (
    applyMiddleware(thunk)
))

export default store; 