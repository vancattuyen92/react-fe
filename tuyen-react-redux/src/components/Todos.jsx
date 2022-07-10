import React from 'react'
import {connect,useDispatch} from 'react-redux'
import {useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import { fetchSingleTodo, FETCH_SINGLETODO } from '../actions/todoActions'
import TodoDetail from '../views/TodoDetail'

const mapStateToProps = state => {
    const todos = state.todo.todos
    return {
        todos
    }
}


function Todos({todos}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function handleViewDetail(id) {
       console.log('todoId',id)
       dispatch(fetchSingleTodo(id))
       navigate(`/todo-detail/${id}`)
    }
    return (
        <div>
            {todos.map((todo) => (
                <div>
                    <div>{todo.id}</div>
                    <div>{todo.title}</div>
                    <div>{todo.author}</div>
                    <button type="button" onClick={() => handleViewDetail(todo.id)}>view details</button>
                </div>

            ))}
        </div>
    )
}

export default connect(mapStateToProps)(Todos)