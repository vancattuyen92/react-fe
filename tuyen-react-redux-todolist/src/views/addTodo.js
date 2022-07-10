import React from 'react';
import iconCheck1 from '../assets/icon88.png'
import '../scss/App.css'
import { addTodos } from '../actions/todoActions';


const mapStateToProps = (state) => {
    const newTodo = {
        author:'',
        title:'',
        status:''
    }
    return {
        newTodo: newTodo,
        addTodos: state.todos.addTodos
    }
}

export default function AddTodo({newTodo}) {
    function handleAddTodo() {
    
    
    }
   

    return (
        <div className="addTodo">
            <div className='addTodo-container'>                 
                <form className="addTodo-form">
                    <div className="addTodo-title">Add New</div>
                    <img src={iconCheck1} alt="icon" className="icon1" />
                    <input type="text" name="title" placeholder='Title' onChange={(e) => handleAddTodo(e)}/>
                    <input type="text" name="author" placeholder='Author' />
                    <input type="text" name="status" placeholder='Status' />
                    <button type="submit" className='submit-button' onClick={handleAddTodo}>ADD</button>
                </form>
            </div>
        </div>
    )
}
