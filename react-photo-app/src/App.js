import { Switch, Route } from "react-router-dom";
import React from 'react'

// views
import Dashboard from "views/Dashboard";
import PhotoAdd from "views/PhotoAdd";
import PhotoDetail from "views/PhotoDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/photo/add" component={PhotoAdd} />
        <Route path="/photo/:id" component={PhotoDetail} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
