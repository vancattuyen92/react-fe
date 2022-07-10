import React, {useState,useEffect} from 'react'
import Select from 'react-select';

// apis
import * as todoApi from '../../apis/todoApi';

export default function Dashboard() {
    // Severity select
    const options = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' }
      ]
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          borderBottom: '1px solid #74747430',
          backgroundColor: state.isSelected ? 'rgba(0, 128, 0, 0.9)' : 'white',
          color: state.isSelected ? 'white' : 'gray',
          color: state.hover ? 'red' : 'blue',
          padding: 12
        }),

        singleValue: (provided, state) => {
          const opacity = state.isDisabled ? 0.5 : 1;
          const transition = 'opacity 300ms';
          return { ...provided, opacity, transition };
        }
    }

    const [todos, setTodos] = useState([])
    const [forms, setForms] = useState({
        id:'',
        description:'',
        status:''
    })
    function onChange(event) {
        const {name,value} = event.target
        setForms(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }
    //fetch Todos
    const fetchTodos = async () => {
        const data = await todoApi.fetchTodos();
        setTodos(data.data)
        //defaultTodos = data.data
    }

    useEffect(() => {
        fetchTodos()
    },[])



    return (
        <div className="dashboard">
            <h1 className="center tracker-title">Todo Tracker</h1>

            <div className="dashboard-container">
                <div className="dashboard-left">
                    <form className="form-dashboard">
                        <div className="input-group">
                            <label htmlFor="description">Description</label>
                            <input autoComplete="off" type="text" placeholder="Describe the issue"/>
                        </div>
                        <div className="input-group">
                            <label htmlFor="severity">Severity</label>
                            <Select options={options} 
                                    styles={customStyles}
                            />
                        </div>
                        <button className="button-add">ADD</button>
                    </form>
                </div>

                <div className="vertical-line"></div>

                <div className="list-todo">
                    <div className="tool-bar">
                        <input autoComplete="off" type="text" placeholder="Search by description"/>
                        <div className="filter dropdown">
                            <div className="droptbtn">Filters <span className="arrow"> &#129171;</span></div>
                            <div className="dropdown-content">
                                <div>All</div>
                                <div>Open</div>
                                <div>Closed</div>
                            </div>
                        </div>
                        <div className="sort dropdown">
                            <div className="droptbtn">Sort by <span className="arrow"> &#129171;</span>
                            </div>
                            <div className="dropdown-content">
                                <div>ASC</div>
                                <div>DESC</div>
                            </div>
                        </div>
                    </div>
                    <div className="task-wrapper">
                        {todos.map((todo, todoIndex) => (
                            <div key={todoIndex} className="todo-task">
                                <div> 
                                    <span className="issue-status">{todo.status}</span> 
                                    <span className="issue-id">{todo.id}</span>
                                </div>
                                <div className="hr"></div>
                                <div className="issue-name">{todo.description}</div>
                                <div className="button-group">
                                    <button className="button-close">Close</button>
                                    <button className="button-delete">Delete</button>
                                </div>
                            </div>
                        ))}      
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}