import { React, useContext } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';

function Nav(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  const logIn = () => {
    setPage(previousState => { return { ...previousState, loginState: 1, menuOpen: false }});
  }
  const logOut = () => {
    setPage(previousState => { return { ...previousState, loginState: 0, menuOpen: false }});
  }

  return (
    <nav id="nav" enabled={getPage.menuOpen.toString()}>
      <ul>
        {(getPage.loginState === 2) ? <li onClick={logOut}>Ausloggen</li> : <li onClick={logIn}>Einloggen</li>}
      </ul>
    </nav>
  );
}

export default Nav;
