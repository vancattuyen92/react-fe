import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import todoReducers from '../reducers/todoReducers'

const rootReducers = combineReducers ({
    todo: todoReducers
})
const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware()
));

export default store; 