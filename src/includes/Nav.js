import { React, useContext } from 'react';
import { GetPageContext } from '../layouts';

function Nav(props) {

  const getPage = useContext(GetPageContext);

  return (
    <nav id="nav" enabled={getPage.menuOpen.toString()}>
      <ul>
        <li>Ausloggen</li>
      </ul>
    </nav>
  );
}

export default Nav;
