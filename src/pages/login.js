import './login.css';

function Login({children}) {
  return (
    <div className="wrapper login">
      <form>
        <label>
          Nutzername:
          <input type="text" placeholder="beispiel@beispiel.de" />
        </label>
        <label>
          Passwort:
          <input type="password" />
        </label>
        {children}
      </form>
    </div>
  );
}

export default Login;
