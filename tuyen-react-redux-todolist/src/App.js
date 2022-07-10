import React from 'react'
import './scss/App.css';
import iconCheck from './assets/check.png'

import { connect } from 'react-redux';
//import { store } from './stores';
import { fetchTodos } from './actions/todoActions'

import AddTodo from './views/addTodo';


const mapStateToProps = state => {
  return {
    todos: state.todo.todos
  }
}

const mapDispatchToProps = {
  fetchTodos
}

function App({fetchTodos,todos}) {

    async function handleLoadTodo() {
      const res = await fetch('https://tony-json-server.herokuapp.com/api/todos')
      const data = await res.json()
      fetchTodos(data.data)
      console.log('dataaaa',data.data)
      console.log('todosssss',todos)
    }

  return (
    <>
    <div className="App">
      <div className="container">

        <div className="mainContent">

          <div className="banner">
            <div className="bg-blur"></div>
            <h1 classname="banner-title">To Do List</h1>
          </div>

          <button type="button" className="loading-button" onClick={handleLoadTodo}>LOAD DATA</button>


          <div className="listContainer">

            {todos.map((todo) => (
              <div className="todo-item j-between">
                <div className="todo-group j-between">
                  <img src={iconCheck} alt="icon" className="icon"/>
                  <div className="todo-info">
                    <div className="todo-title">{todo?.title}</div>
                    <div className="todo-author">{todo?.author}</div>
                  </div>
                </div>
                <div className="todo-status">{todo?.status}</div>
              </div>
            ))}

          </div>
          
          <button type="button" className="addButton">+</button>
        </div>
      </div>
      
    </div>
    ================================================================================================================================================================================
    
    <AddTodo/>
    </>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


 