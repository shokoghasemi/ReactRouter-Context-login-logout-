import React from "react";
import Input from "./component/Input/Input";
import ProfileLogOut from "./component/Logout";
import P from "./component/P/P";
import H4 from "./component/H/H";
import Button from "./component/Button/Button";
import { UserContext } from "./UserProvider";
import './User.css'
function User() {
  return (
    <UserContext.Consumer>
      {user =>
        user.LoggedIn ? <ProfileLogOut {...user} /> : <Login {...user} />
      }
    </UserContext.Consumer>
  );
}
export default User;

export function Login(props) {
  return (
    <div className="Login">
      <P perDiscription="Please Login" />
      <>
        <H4 discription="UserName" />
        <Input
          Title="userName"
          Type="text"
          Name="name"
          OnChange={props.handleName}
        />
      </>
      <>
        <H4 discription="Password" />
        <Input
          Title="password"
          Type="text"
          Name="password"
          OnChange={props.handlePassword}
        />
      </>
      <Button OnClick={props.handleLogin} discription="Login" />
      <P perDiscription={props.error} />
    </div>
  );
}
