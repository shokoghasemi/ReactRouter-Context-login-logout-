import React from 'react';

export const UserContext = React.createContext();
class UserProvider extends React.Component {
    state = {
        name: '',
        password: '',
        LoggedIn: false,
        handleLogout: () => {
            this.setState({
                ...this.state,
                LoggedIn: false,
                name: "",
                password: ""
            })
        },
        handleLogin: () => {
            console.log(this.state)
            if (this.state.name === "admin" && this.state.password === "admin") {
                this.setState({
                    ...this.state,
                    LoggedIn: true,
                })
            }
        },
        handleName: (event) => {
            this.setState({
                ...this.state,
                name: event.target.value
            })
        },
        handlePassword: (event) => {
            this.setState({
                ...this.state,
                password: event.target.value
            })
        }
    }
    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}
export default UserProvider;