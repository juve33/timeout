import { React, useContext } from 'react';
import { GetPageContext } from './layouts';

import StartPage from './pages/startpage';
import Login from './pages/login';
import App from './pages/app';

function Content(props) {

  const getPage = useContext(GetPageContext);

  switch (getPage.loginState) {
    case 0: {
      return (
        <>
          <StartPage />
        </>
      );
    }
    case 1: {
      return (
        <>
          <Login />
        </>
      );
    }
    case 2: {
      return (
        <>
          <App />
        </>
      );
    }
    default: {
      return (
        <>
          <StartPage />
        </>
      );
    }
  }
}

export default Content;
