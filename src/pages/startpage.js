import { useContext } from 'react';
import { SetPageContext } from '../layouts';

import '../components/Buttons.css';

function StartPage({children}) {

  const setPage = useContext(SetPageContext);
  const continueLogin = () => {
    setPage(previousState => { return { ...previousState, loginState: 1, menuOpen: false }});
  }

  return (
    <>
      <h1>Startseite</h1>
      <button onClick={continueLogin}>Einloggen</button>
      {children}
    </>
  );
}

export default StartPage;
