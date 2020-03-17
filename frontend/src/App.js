import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./containers/Home";
import Artist from "./containers/Artist";
import Album from "./containers/Album";
import Toolbar from "./components/Toolbar/Toolbar";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Track from "./containers/Track";
import TrackHistory from "./containers/TrackHistory";

function App() {
  return (
      <>
          <header>
              <Toolbar/>
          </header>
          <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/artist/:id' exact component={Artist}/>
              <Route path='/album/:albumId' exact component={Album}/>
              <Route path='/track/:id' exact component={Track}/>
              <Route path='/track_history' exact component={TrackHistory}/>
              <Route path='/register' exact component={Register}/>
              <Route path='/login' exact component={Login}/>
          </Switch>
      </>
  );
}

export default App;
