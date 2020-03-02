import React from "react";
import UserProvider from "./UserProvider";
import RouterContainer from './Router/Router'

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <UserProvider>
         <RouterContainer />
        </UserProvider>
      </React.Fragment>
    );
  }
}
export default App;
