import { connect } from 'react-redux'
import React,{useEffect,useState} from 'react'
import { todosDetail } from '../actions/todoActions'


const mapStateToProps = state => {
    return {
        todoItem:state.todo.todoItem
    }
}
const mapDispatchToProps = {
    todosDetail
}


export function TodoDetail({todosDetail,todoItem}) {
    // const [todo,setTodo] = useState(null)
    // useEffect(() => {
    //     async function fetchData() {
    //         const res = await fetch(`https://tony-json-server.herokuapp.com/api/todos/${todoId}`)
    //         const data = await res.json()
    //         setTodo(data.data)
    //     }
    //     fetchData();
    // },[todoId])
    // console.log(todo)
    useEffect(() => {
        todosDetail()
    },[])

    return (
        <div>
            This is todo detail        
            <h1>Todo Detail</h1>
            <p>id: {todoItem?.id}</p>
            <p>title: {todoItem?.title}</p>
            <p>author: {todoItem?.author}</p>
            <p>description: {todoItem?.description}</p>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoDetail)