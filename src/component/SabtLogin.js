import React, { Fragment } from 'react';
import { userContext } from '../App.js'
class SabtLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: "" };
    }
    handleChangeName = (event) => {
        this.setState({ username: event.target.value });
    }
    handleChangePassword = (event) => {
        this.setState({ password: event.target.value });
    }
    handleChangeSubmit = (event) => {
        if (this.state.username === "admin" || this.state.password === "admin") {
            //    {user}.user=true;

            console.log('happy');
            console.log(this.context);

        }
        else {
            alert('becurful submitted: ');
            console.log('becurful')
        }
        event.preventDefault();

        this.setState({ username: '', password: '' });
    }
    render() {

        return (<userContext.Consumer>
            {(user) => {
                return (
                    <>
                        <h2>username:{user.userName}</h2>
                        <h3>password:{user.password}</h3>
                        <div>
                            <input type='text' name='username' value={this.state.username} onChange={this.handleChangeName} />
                        </div>
                        <div>
                            <input type="text" name="password" value={this.state.password} onChange={this.handleChangePassword} />
                        </div>
                        <button type="submit" onClick={this.handleChangeSubmit}>submit</button>
                    </>


                )
            }}
        </userContext.Consumer>

        )
    }
}

export default SabtLogin;