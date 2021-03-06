import React from "react";
import { UserContext } from "../UserProvider";
import { Login } from "../User/User";
import P from "../component/P/P";
import Button from "../component/Button/Button";
import './Logout.css'
export default function Profile(props) {
  return (
    <>
      <UserContext.Consumer>
        {user =>
          user.LoggedIn ? <ProfileLogOut {...user} /> : <Login {...user} />
        }
      </UserContext.Consumer>
    </>
  );
}
function ProfileLogOut(props) {
  return (
    <div className="Logout">
      <P perDiscription="hello" lastDiscription={props.name} />
      <Button OnClick={props.handleLogout} discription="Logout" />
     
    </div>
  );
}
