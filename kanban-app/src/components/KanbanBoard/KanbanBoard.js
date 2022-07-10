import React, { useEffect, useState } from'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// apis
import * as todoApi from '../../apis/todoApi';

export default function KanbanBoard() {
    // States
    const [todos, setTodos] = useState([])

    // fetch todo list after component mounted
    useEffect(() => {
        async function fetchTodos() {
            const res = await todoApi.fetchTodos();
            setTodos(res.data);
        }
        fetchTodos();
    }, [])

    return (
        <div className="KanbanBoard">
            <div className="top-part">
                <div className="title">Kanban Board</div>
                <div className="add-task"><FontAwesomeIcon icon={faPlus} className="icon"/> ADD TASK</div>
            </div>
            <div className="board">
                <div className="new column">
                    <div className="column-title orange">New</div>
                    <div className="new-groups">
                        {todos.map(todo => (
                                <div className="card cardTodos" id="cardTodos">
                                <div className="issue">{todo.title}</div>
                                <div className="button-group">
                                    <div>
                                        <button className="edit-button button">EDIT</button>
                                        <button className="view-button button">VIEW</button>
                                    </div>
                                    <p className="author">{todo.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="processing column">
                    <div className="column-title blue">In Process</div>
                </div>
                <div className="completed column">
                    <div className="column-title green">Completed</div>
                </div>
            </div>  
        </div>
    )
}