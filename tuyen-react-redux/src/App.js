import './App.css';
import store from './stores'

//actions
import {setIncrement, setDecrement} from './actions/counterActions'
import { fetchTodos } from './actions/todoActions';
import { addTodo } from './actions/todoActions';
import { connect } from 'react-redux'
import Todos from './components/Todos';
import TodoDetail from './views/TodoDetail';
import {Routes,Route,Link} from "react-router-dom"

import {loadTodos} from './actions/todoActions'


const mapStateToProps = state => {
  console.log(state)
  const number = state.counter.number;
  const loading = state.global.loading;
  return {
    number,
    loading
  }
}
const mapDispatchToProps = {
  fetchTodos,
  addTodo,
  loadTodos
}

 
function App({number, fetchTodos,addTodo,loading, loadTodos}) {
  // State
  //const [number, setNumber] = useState{store.getState().counter.number};


  // Actions
  function handleIncrement() {
    store.dispatch(setIncrement(1))
  }
  function handleDecrement() {
    store.dispatch(setDecrement(1))
  }


  //console.log('store', store.getState())

  async function handleLoadTodo(){
    
    // const res = await fetch('https://tony-json-server.herokuapp.com/api/todos');
    // const data = await res.json();
    loadTodos();
    
  }

  function handleAddTodo() {
    const newTodo = {
      "title": "Learn React" + Date.now(),
      "author": "Tony Nguyen",
      "description": "nihil aut laudantium",
      "severity": "low",
      "status": "new",
    }
    addTodo(newTodo)
  }



  // Views
  return (
    <div className="App">
      {loading && <div className="loading">
          <div className="bg-blur"></div>
          <div className="loading-container"><div class="lds-facebook"><div></div><div></div><div></div></div></div>
        </div>}
      
      <h2>React Redux</h2>
      <div>
        Counter: {number} <br/>
        <button type="button" onClick={handleDecrement}>decrement</button>
        <button type="button" onClick={handleIncrement}>increment</button>
        <h2>Todo List <button type="button" onClick={handleLoadTodo}>Load Todo</button></h2>
        

        <button type="button" onClick={handleAddTodo}>Add Todo</button>
        <Todos/>


        {/* <Routes>
          <Route exact path="/todo-detail/:id" component={TodoDetail}/>
        </Routes> */}

      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

