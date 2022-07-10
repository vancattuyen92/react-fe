import { Route, Switch } from "react-router-dom";

import './App.css';
// views
import Account from "views/Account";
import Dashboard from "views/Dashboard/";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/account" component={Account} />
        <Route path="/" component={Dashboard} />
      </Switch>  
    </div>
  );
}

export default App;
