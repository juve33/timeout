import { useContext } from 'react';
import { SetPageContext } from '../layouts';

import './login.css';

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
          Nutzername:
          <input type="text" placeholder="beispiel@beispiel.de" />
        </label>
        <label>
          Passwort:
          <input type="password" />
        </label>
        <input onClick={cancelLogin} type="button" value="Abbrechen" />
        <input onClick={continueLogin} type="submit" value="Einloggen" />
        {children}
      </form>
    </>
  );
}

export default Login;
