import React from 'react'
import { UserContext } from './UserProvider'
function User() {
    return (
        <UserContext.Consumer>
            {(user) => user.LoggedIn ? <Profile {...user} /> : <Login {...user}/>}
        </UserContext.Consumer>
    )
}
export default User;
function Profile(props) {
    return (
        <>
            <p>hello, {props.name}</p>
            <button onClick={props.handleLogout}>Logout</button>
        </>
    )

}

function Login(props) {
    return (
        <>
            <p>please, Login</p>
            <input type="text" name='name'  onChange={()=>props.handleName}></input>
            <input type="text" name='password'  onChange={()=>props.handlePassword}></input>
            <button onClick={props.handleLogin}>Login</button>
        </>
    )
}

