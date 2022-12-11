import React from "react"; //importing react library
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Users from "./user/pages/Users";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          {/* <Route path="/:userId/places">
            <UserPlaces exact />
          </Route> */}
          {/* <Route path="/places/new" exact>
            <NewPlace />
          </Route> */}
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
