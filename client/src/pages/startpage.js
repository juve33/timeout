import { Link } from "react-router-dom";

import '../components/Buttons.css';

function StartPage({children}) {

  const continueLogin = () => {

  }

  return (
    <>
      <h1>Startpage</h1>
      <Link to="/login">
        <button onClick={continueLogin}>Log in</button>
      </Link>
      {children}
    </>
  );
}

export default StartPage;
