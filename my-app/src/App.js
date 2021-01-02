import React from "react";
import Login from "./componant/Login.jsx";
import {BrowserRouter, Route ,Switch} from "react-router-dom";
import Profile from "./componant/Profile.jsx";

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route  path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>

  );
}

export default App;
