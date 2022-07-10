import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import CounterHook from '../src/CounterHook'
// stores
import store from './stores'
// react-router-dom
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TodoDetail from './views/TodoDetail';



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App/>}/>
          <Route  path="/todo-detail/:id" element={<TodoDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>


    {/* <App randomNumber={3} isAuth={false} />
    <CounterHook /> */}
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
