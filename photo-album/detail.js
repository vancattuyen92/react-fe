
const photoDetail = document.getElementById('photoDetail')
photoDetail.innerHTML = '';

// get id from url
const params = new URLSearchParams(window.location.search)
const idPhoto = params.get('id');

fetch(`https://tony-json-server.herokuapp.com/api/photos/${idPhoto}`, {
    method: 'GET',
  })
  .then(res => res.json())
  .then(res => {
    const { data } = res;
    photoDetail.innerHTML +=`
        <div class="card col-md-6 offset-md-3">
            <img class="card-img-top" src=${data.image} alt="Card image cap" height="250" />
            <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.description}</p>
                <p class="card-text"><small class="text-muted">Last updated 9 mins ago</small></p>
            </div>
        </div>
        `;
  })

