// url: https://tony-json-server.herokuapp.com/api/photos

let listPhoto;
// const getPhoto = window.localStorage.getItem('photos');
// const photo = JSON.parse(getPhoto);

fetch(`https://tony-json-server.herokuapp.com/api/photos`, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(res => {
    listPhoto = res.data;
    fetchTodos(res.data);
  })

  
//fetch list
function fetchTodos(list) {
    const boxTodos = document.getElementById('boxTodos')
    boxTodos.innerHTML = '';
    
    for (const index in list) {
        boxTodos.innerHTML +=`
            <div class="col">
                <div class="card">
                    <img class="card-img-top" src=${list[index].image} alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title" id='name'>${list[index].name}</h4>  
                        <div class="card-text" id='description'>${list[index].description}</div>  
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="d-flex col-auto mr-auto">
                                <a href="./detail.html?id=${list[index].id}" style="margin-right: 5px">
                                    <button type="button" id="view" class="btn btn-primary" >View</button>
                                </a>
                                <a href="./edit.html?id=${list[index].id}">
                                    <button type="button" id="edit" class="btn btn-primary">Edit</button>
                                </a>
                            </div>
                            <div class="col-auto">9 mins</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}



