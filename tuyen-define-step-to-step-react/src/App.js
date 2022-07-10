import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Product from './pages/Product/Product'

function App() {
    return (
        <div>
            {/* <Router>
                <ul>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/dashboard"> <Dashboard/> </Route>
                    <Route path="/login"> <Login/> </Route>
                    <Route path="/product"> <Product/> </Route>
                    <Route path="/register"> <Register/> </Route>
                </Switch>
            </Router>    */}

            <Router>
              <Routes>
                <Route path="/dashboard" element={<div><Dashboard/></div>} />
                <Route path="/register" element={<div><Register/></div>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/product" element={<Product/>} />
              </Routes>

              <Link to="/dashboard">Dashboard</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/product">Product</Link>
            </Router>
        </div>
    )
}

export default App