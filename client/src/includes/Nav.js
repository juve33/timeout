import { Link, useLocation } from "react-router-dom";
import { React, useContext, useEffect } from 'react';
import { GetPageContext, SetPageContext, defaultPageState } from '../layouts';
import { useNavigate } from 'react-router-dom';
import { useSendLogoutMutation } from '../slices/authApiSlice';

function Nav(props) {

  const getPage = useContext(GetPageContext);
  const setPage = useContext(SetPageContext);

  let location = useLocation();

  const navigate = useNavigate();

  const [sendLogout, {
      isSuccess
  }] = useSendLogoutMutation();

  useEffect(() => {
      if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  const logIn = () => {
    setPage(previousState => { return { ...previousState, menuOpen: false }});
  }
  const logOut = () => {
    setPage(defaultPageState);
  }

  return (
    <nav id="nav" enabled={getPage.menuOpen.toString()}>
      <ul>
        {(location.pathname === "/app") ? <li title="Logout" onClick={() => {
          sendLogout();
          logOut();
          navigate("/");
        }}>Log out</li> : <Link to="/login"><li onClick={logIn}>Log in</li></Link>}
        {(location.pathname !== "/app") ? <Link to="/signup"><li onClick={logIn}>Register</li></Link> : <></>}
      </ul>
    </nav>
  );
}

export default Nav;
