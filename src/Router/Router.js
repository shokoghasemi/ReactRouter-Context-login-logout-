import React from "react";
import User from "../User/User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "../UserProvider";
import Panel from "../Panel.js";
import About from "../About/About.js";
import Logout from "../Logout/Logout";
import './Router.css'

export default function RouterContainer() {
  return (
    <Router>
      <nav>
        <ul className="navMenu">
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <UserContext.Consumer>
            {user =>
              user.LoggedIn ? (
                <>
                  <li>
                    <Link to="/panel">Panel</Link>
                  </li>
                  <li>
                    <Link to="/logout">logout</Link>
                  </li>
                </>
              ) : null
            }
          </UserContext.Consumer>
        </ul>
      </nav>
      <Switch>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/panel">
          <Panel />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <User />
        </Route>
      </Switch>
    </Router>
  );
}
