import React,{useState,useEffect} from 'react'
import { Switch, Route, Link } from "react-router-dom";
import PhotoDetail from "views/PhotoDetail";

import * as photosApi from '../../apis/photoApi'

function Dashboard() {
  // useEffect(() => {  
  //   async function fetchUsers() { 
  //     try {
  //       const res = await fetch('https://cms-connector-be.herokuapp.com/api/user', {
  //       method: 'GET'
  //       })
  //       const data=await res.json();
  //       console.log('fetch users:', data)
  //     } catch (err) {
        
  //     }
      
  //   }


  //   fetchUsers()
  // },[])

  const [photos, setPhotos] = useState([])

  //fetch Todos
  const fetchPhotos = async () => {
    const data = await photosApi.fetchPhotos();
    setPhotos(data.data)
  }

  useEffect(() => {
    fetchPhotos()
  },[])

  return (
    <div>
        <div className="photo-album">
          <div className="album">
            <div className="container">
              <div className="photos-list">
                <div className="grid-container">

                {photos.map((photo, photoIndex) => (
                  <div className="card grid-item" key={photos.id}>
                    <Link to={{pathname: "/photo/:id", 
                          state: photos.id}} 
                          style={{ textDecoration:'none'}}>
                            <img alt="img" src={photo.image} class="photo" />
                    </Link> 
                    
                    <div className="photo-date">{photo.date}</div>
                    <div className="photo-title">{photo.title}</div>
                    <p>{photo.description}</p>
                    <div className="read-more red">Read More</div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
 
          <div className="subscription a-center red">
                <div className="sub-title">Subscribe to our newsletter.</div>
                <div className="sub-intro">Sign up with your email address to receive news and updates.</div>
                <div className="email-register">
                  <input placeholder="Email Address"/>
                  <button>Sign Up</button>
                </div>
          </div>
          <Switch>
          <Route path="/photo/:id" component={PhotoDetail} />
          </Switch>

          <div className="footer a-center">
            <div className="container">
              <div className="icon-group-bottom j-between">
                    <img class="icons" src={require('../../img/youtube-brands.svg').default} alt=""/>
                    <img class="icons" src={require('../../img/facebook-brands.svg').default} alt=""/>
                    <img class="icons" src={require('../../img/twitter-brands.svg').default} alt=""/>
                </div> 
                <div className="made-by">Made with <span className="name">KatieV</span></div>
            </div>
          </div>        
        </div>
    </div>
  )
}



export default Dashboard
