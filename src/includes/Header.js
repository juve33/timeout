import { React, useContext } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';

function Header(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  const toggleNav = () => {
    setPage({menuOpen: !(getPage.menuOpen)});
  }

  return (
    <header className={props.color}>
      <div onClick={toggleNav} className="menu">
        &#x2261;
      </div>
      TimeOut
    </header>
  );
}

export default Header;
