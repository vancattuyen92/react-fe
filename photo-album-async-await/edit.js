
const photoEdit = document.getElementById('photoEdit')
photoEdit.innerHTML = '';

// get id from url
const params = new URLSearchParams(window.location.search)
const idPhoto = params.get('id');

fetch(`https://tony-json-server.herokuapp.com/api/photos/${idPhoto}`, {
    method: 'GET',
    
  })
  .then(res => res.json())
  .then(res => {
    const { data } = res;
    console.log(data.name)

    photoEdit.innerHTML +=`
        <form action="./index.html">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="name" placeholder="${data.name}">
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="text" class="form-control" id="image" placeholder="${data.image}">
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" placeholder="${data.description}">
            </div>
            <br />
            <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary">Submit</button>
            </div>
         </form>
        `;
  })
