import React from "react";
import { Route, Switch } from "react-router-dom";
import Explore from "./components/Explore";
import Home from "./components/Home";
import Postform from "./components/Postform";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/postform">
          <Postform />
        </Route>
        <Route exact path="/explore">
          <Explore />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
