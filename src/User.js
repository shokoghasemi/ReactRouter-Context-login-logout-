import React from "react";
import { UserContext } from "./UserProvider";
function User() {
  return (
    <UserContext.Consumer>
      {user => (user.LoggedIn ? <Profile {...user} /> : <Login {...user} />)}
    </UserContext.Consumer>
  );
}
export default User;
function Profile(props) {
  return (
    <>
      <p>hello, {props.name}</p>
      <button onClick={props.handleLogout}>Logout</button>
    </>
  );
}

function Login(props) {
  const Login = {
    margin: "0 auto",
    padding:'5% 5%',
    maxWidth: "40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around"
  };
  const h4={
      margin:"0 auto",
  }
  const button={
      margin:"2% auto",
      backgroundColor:"red"
  }
  return (
    <div style={Login}>
      <p>please, Login</p>
      <>
        <h4 style={h4}>UserName</h4>
        <input
          title="userName"
          type="text"
          name="name"
          onChange={props.handleName}
        ></input>
      </>
      <>
        <h4 style={h4}>Password</h4>
        <input
          title="Password"
          type="text"
          name="password"
          onChange={props.handlePassword}
        ></input>
      </>

      <button style={button} onClick={props.handleLogin}>Login</button>
    </div>
  );
}
