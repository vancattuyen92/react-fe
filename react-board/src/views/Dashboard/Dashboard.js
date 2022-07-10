import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

// components
import Horizontal from 'components/Horizontal';

let defaultTodos = [];

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [isAllowSubmit, setIsAllowSubmit] = useState(false);
    const [forms, setForms] = useState({
        id:'',
        description:'',
        status:''
    })
    
    function onChange(event) {
        const { name, value } = event.target;
        // setForms({
        //     ...forms,
        //     [event.target.name]:event.target.value
        // })
        setForms(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }
    

    // fetch Todos
    const fetchTodos =  async () => {
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
            method:'GET',
        })
        const data = await res.json();  
        setTodos(data.data);
        defaultTodos = data.data;
    }   

    useEffect(() => {      
        fetchTodos();
    },[])
    
    // add Todos
    async function addTodos(event) {
        event.preventDefault();
        setIsAllowSubmit(true);
        if(forms.description === '') {
            console.log('please enter input');
            return;
        }
        const newTodos = {
            id: Date.now().toString(),
            description: forms.description,
            status: forms.status,
            state: "open",
            title: "Learn React",
            author: "Tony Nguyen"
        }
        const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos`, {
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodos)
        })
        const data = await res.json(); 
        setTodos([...todos, data.data])
    }

    // delete Todos
    async function deleteTodos(todoId) {
        await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
            method:'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        const newTodos = todos.filter((item) => item.id !== todoId);
        setTodos(newTodos);
        defaultTodos = newTodos;
        // fetchTodos();
    }

    
    // change Todos' state from open to closed
    async function changeState(todoId) {
        await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`, {
            method:'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({'state': "closed"})
        })
        fetchTodos();   
    }
    
    // filter All - Open - Closed
    function filterOpen() {
        const newTodos = defaultTodos.filter((item) => item.state === "open")
        setTodos(newTodos)
    }
    function filterClosed() {
        const newTodos = defaultTodos.filter((item) => item.state === "closed")
        setTodos(newTodos)
    }
    function filterAll() {
        setTodos(defaultTodos)
    }

    // sort by name
    function sortByName(event) {
        const newTodos = [...todos];
        newTodos.sort((a,b) => {
            const nameA = a.description.toLowerCase();
            const nameB = b.description.toLowerCase();
            if (event === 'ASC' && nameA < nameB) return -1;
            if (event === 'DESC' && nameA > nameB) return -1;
            return 0;
        })
        setTodos(newTodos)
    }

    // search by description
    function searchByDes(event) {
        // console.log('search by description', event)
        const newTodos = defaultTodos.filter(todo => todo.description.toLowerCase().indexOf(event) !== -1)
        // const newTodos = todos.filter((data) => {
        //     return data.description.search(event) !== -1
        // })
        setTodos(newTodos)
    }

    return (
        <div>
            <div className="header">Todo Tracker</div>
            <Form onSubmit={addTodos}>
                <FormGroup>
                    <Label for="description">Decription</Label>
                    <Input type="text" name="description" value={forms.description} id="description" placeholder="Describe the issue..." onChange={onChange}/>
                    {isAllowSubmit && forms.description === '' && <div className="text-danger">Please enter description...</div>}
                </FormGroup>
                <br/>
                <FormGroup>
                    <Label for="status">Severity</Label>
                    <Input type="select" name="status" value={forms.status} id="status" onChange={onChange}>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Input>
                </FormGroup>
                <br/>
                <Button type="submit" color="primary">Add</Button>
            </Form>

            <Horizontal color="gray"/>

            <h2>LIST TODO</h2>
            <Input type="text" className="search" placeholder="Search by description" onChange={(event) => searchByDes(event.target.value)}/>
            <div className="filter flex j-between">
                <h5>Filter</h5> 
                <Button type="button" color="success" onClick={() => filterAll()}>All</Button>
                <Button type="button" color="info" onClick={() => filterOpen()}>Open</Button>
                <Button type="button" color="secondary" onClick={() => filterClosed()}>Closed</Button>
            </div>
            <div className="sort flex j-between">
                <h5>Sort</h5>
                <Input type="select" className="sort-select" onChange={(event) => sortByName(event.target.value)} >
                    <option value="none">None</option>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </Input>
            </div>

            <Horizontal />

            <div className="dashboard_wrapper">
                {todos.map((todo) => (
                    <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                        <Toast>
                            <ToastHeader key={todo.id}>{todo.id}<span className="issue-status" value={todo}>{todo.state}</span></ToastHeader>
                                <ToastBody>
                                    <div className="issue-name">{todo.description}</div>
                                    <div className="issue-level">{todo.status}</div>
                                    <div className="button-group">
                                        <Button color="primary" onClick={() => changeState(todo.id)} disabled={false}>Close</Button>{' '}
                                        <Button color="danger" onClick={() => deleteTodos(todo.id)}>Delete</Button>
                                    </div>              
                                </ToastBody>
                        </Toast>
                    </div>
                ))}  
            </div>
        </div>
    )
}