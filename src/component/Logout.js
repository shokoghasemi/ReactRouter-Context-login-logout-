import React from "react";
import { UserContext } from "../UserProvider";
import {Login} from "../User"
export default function Profile(props) {
  return (
    <>
      <UserContext.Consumer>
        {user =>
          user.LoggedIn ? (
            <ProfilL {...user}/>
          ) : (
            <Login {...user} />
          )
        }
      </UserContext.Consumer>

    </>
  );
}
function ProfilL(props) {
    return (
      <>
        <p>hello, {props.name}</p>
        <button onClick={props.handleLogout}>Logout</button>
      </>
    );
  }