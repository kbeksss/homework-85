import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import Artist from "./containers/Artist";

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/artist/:id' exact component={Artist}/>
    </Switch>
  );
}

export default App;
