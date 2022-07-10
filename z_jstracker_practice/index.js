// fetch list Todo
function fetchTodos(list) {
    const boxTodos = document.getElementById('boxTodos');
    
    for (const index in list) {
        boxTodos.innerHTML += 
        `<div class="card">
            <div class="card-body">
                <div class="issue" style="font-size: 13px">Issue ID: <span class="card-id">${list[index].id}</span></div>
                <button class="btn py-0 px-1 bg-info text-white my-4" style="font-size:12px">${list[index].status}</button>
                <h3 class="issue-name card-title">${list[index].description}</h3>
                <div class="">🕓 <span class="issue-level">${list[index].level}</span></div>
                <div class="flex-row flex-d mt-3">
                    <button class="btn btn-warning">Close</button>
                    <button class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>`
    }
}

// let listTodo;

fetch('https://tony-json-server.herokuapp.com/api/todos', {
    method: "GET"
}).then(function(response){
    return response.json();
}).then(function(data){
    listTodo = response.data;
})

