import { React, useContext } from 'react';
import { GetPageContext, SetPageContext } from '../layouts';

function Header(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  const toggleNav = () => {
    setPage(previousState => {
      return { ...previousState, menuOpen: !(getPage.menuOpen) }
    });
  }

  return (
    <header className={props.color}>
      <div onClick={toggleNav} className="menu" title={getPage.menuOpen ? 'Close Menu' : 'Open Menu'}>
        &#x2261;
      </div>
      TimeOut
    </header>
  );
}

export default Header;
