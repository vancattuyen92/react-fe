import { Switch, Route, Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

// views
import Dashboard from "views/Dashboard";
import PhotoAdd from "views/PhotoAdd";
import PhotoDetail from "views/PhotoDetail";
import Login from "views/Login";

function App() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <Link to="/" style={{ textDecoration:'none'}}><div className="logo" href={Dashboard}>Album</div></Link> 
            <div className="menu j-between">
              <Link to="/" style={{ textDecoration:'none'}}><span className="menu-title">Blog</span></Link> 
              <Link to="/add" style={{ textDecoration:'none'}}><span className="menu-title">Add</span></Link>   
              <Link to="/login" style={{ textDecoration:'none'}}><span className="menu-title" >Login</span></Link>         
            </div>
            <div className="icon-group j-between">
              <img class="icons" src={require('../src/img/youtube-brands.svg').default} alt=""/>
              <img class="icons" src={require('../src/img/facebook-brands.svg').default} alt=""/>
              <img class="icons" src={require('../src/img/twitter-brands.svg').default} alt=""/>
            </div> 
        </div> 
      </div>
      <Switch>
        <Route path="/add" component={PhotoAdd} />
        <Route path="/photo/:id" component={PhotoDetail} />
        <Route path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
