import { combineReducers, createStore, compose } from "redux";

// reducers
import userReducer from 'reducers/userReducer';

const rootReducers = combineReducers({
  user: userReducer
});

const composeEnhance =  process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const store = createStore(
  rootReducers,
  composeEnhance()
);

export default store;