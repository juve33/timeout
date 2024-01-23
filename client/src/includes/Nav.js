import { Link, useLocation } from "react-router-dom";
import { React, useContext } from 'react';
import { GetPageContext, SetPageContext, defaultPageState } from '../layouts';

function Nav(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  let location = useLocation();

  const logIn = () => {
    setPage(previousState => { return { ...previousState, menuOpen: false }});
  }
  const logOut = () => {
    setPage(defaultPageState);
  }

  return (
    <nav id="nav" enabled={getPage.menuOpen.toString()}>
      <ul>
        {(location.pathname === "/app") ? <Link to="/"><li onClick={logOut}>Log out</li></Link> : <Link to="/login"><li onClick={logIn}>Log in</li></Link>}
      </ul>
    </nav>
  );
}

export default Nav;
