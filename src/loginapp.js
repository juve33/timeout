import React from 'react';

import StartPage from './pages/startpage';
import Login from './pages/login';
import App from './pages/app';

class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: "startPage"};
  }

  startLogin = () => {
    this.setState({currentPage: "startLogin"});
  }

  login = () => {
    this.setState({currentPage: "loggedIn"});
  }

  render() {
    switch (this.state.currentPage) {
      case "startPage": {
        return (
          <>
            <StartPage>
              <button onClick={this.startLogin}>Einloggen</button>
            </StartPage>
          </>
        );
      }
      case "startLogin": {
        return (
          <>
          <Login>
            <input onClick={this.login} type="submit" value="Einloggen" />
          </Login>
          </>
        );
      }
      case "loggedIn": {
        return (
          <>
            <App />
          </>
        );
      }
      default: {
        return (
          <>
            <StartPage>
              <button onClick={this.startLogin}>Einloggen</button>
            </StartPage>
          </>
        );
      }
    }
  }
}

export default LoginApp;
