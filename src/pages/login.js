import { useContext } from 'react';
import { SetPageContext } from '../layouts';

import '../components/Forms.css';
import '../components/Buttons.css';

function Login({children}) {

  const setPage = useContext(SetPageContext);
  const continueLogin = () => {
    setPage(previousState => { return { ...previousState, loginState: 2, menuOpen: false }});
  }
  const cancelLogin = () => {
    setPage(previousState => { return { ...previousState, loginState: 0, menuOpen: false }});
  }

  return (
    <>
      <form className="login">
        <label>
          Username:
          <input type="email" placeholder="example@example.org" />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <input onClick={cancelLogin} type="button" value="Cancel" />
        <input onClick={continueLogin} type="submit" value="Log in" />
        {children}
      </form>
    </>
  );
}

export default Login;
