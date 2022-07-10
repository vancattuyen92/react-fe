import React, {useState} from 'react'


function PhotoAdd() {
  const [photos, setPhotos] = useState([])
  const [forms, setForms] = useState({
    id:'',
    date: '',
    title:'',
    category:'',
    description:'',
    image:''
  })

  function onChange(e) {
    const {name,value} = e.target
    setForms(prevState => {
      return {
        ...prevState,
        [name]:value
      }
    })
  }

  async function addPhotos(e) {
    e.preventDefault();
    const newPhotos = {
        id: Date.now().toString(),
        date: Date.parse(),
        title: forms.title,
        category: forms.category,
        description: forms.category,
        image: forms.image
    }
    const res = await fetch(`https://tony-json-server.herokuapp.com/api/photos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newPhotos)
    })
    const data = await res.json();
    setPhotos([...photos, data.data])
  }

  return (
    <div className="photo-add">
        <form class="a-center" onSubmit={addPhotos}>
          <div className="photo-add-title">Add New Post</div>
          <input placeholder="Enter Title" name='title' value={forms.title} onChange={onChange} />      
          <input placeholder="Enter Image" name='image' value={forms.image} onChange={onChange}/>
          <input placeholder="Enter Category" name='category' value={forms.category} onChange={onChange}/>
          <input placeholder="Enter Description" name='description' value={forms.description} onChange={onChange}/>
          <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default PhotoAdd
