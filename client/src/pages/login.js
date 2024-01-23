import { Link, useNavigate } from "react-router-dom";

import '../components/Forms.css';
import '../components/Buttons.css';

function Login({children}) {

  let navigate = useNavigate();

  const continueLogin = async (e) => {
    e.preventDefault();
    // bool-Funktion zum Überprüfen der Logindaten hier einfügen
    let validate = true;
    if (validate) {
      navigate('/app');
    } else {
      document.getElementsByClassName("login")[0].reset();
    }
  };

  return (
    <>
      <form className="login" onSubmit={continueLogin}>
        <label for="username">Username:</label>
        <input type="email" id="username" placeholder="example@example.org" required />
        <label for="password">Password:</label>
        <input type="password" id="password" placeholder="1234" required />
        <div className="button-wrapper">
          <Link to="/">
            <input type="button" value="Cancel" />
          </Link>
          <input type="submit" value="Log in" />
        </div>
        {children}
      </form>
    </>
  );
}

export default Login;
