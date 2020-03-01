import React from "react";
import UserProvider from "./UserProvider";
import User from "./User";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { UserContext } from "./UserProvider";
import Panel from "./component/Panel.js";
import About from "./component/About/About.js";
import Logout from "./component/Logout";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UserProvider>
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
        </UserProvider>
      </React.Fragment>
    );
  }
}
export default App;
