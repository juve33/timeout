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
        <label for="username">Username:</label>
        <input type="email" id="username" placeholder="example@example.org" />
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="1234" />
        <div className="button-wrapper">
          <input onClick={cancelLogin} type="button" value="Cancel" />
          <input onClick={continueLogin} type="submit" value="Log in" />
        </div>
        {children}
      </form>
    </>
  );
}

export default Login;
