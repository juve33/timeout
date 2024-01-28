import { Link } from "react-router-dom";

import './Forms.css';
import './Buttons.css';

function UserForm({ onSubmit, errRef = null, errMsg, userRef = null, username, setUsername, password, setPassword, isLoading, submitButtonText, additionalButtonText, additionalButtonOnClick }) {

  return (
    <>
      <form className="login" onSubmit={onSubmit}>
        <p ref={errRef} className={'status red' + (errMsg ? '' : ' hidden')}>
          {errMsg}
        </p>
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="example@example.org"
          ref={userRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="1234"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div className="button-wrapper">
          <Link to="/">
            <input type="button" value="Cancel" />
          </Link>
          <input type="button" value={additionalButtonText} onClick={additionalButtonOnClick} disabled={isLoading} />
          <input type="submit" value={submitButtonText} disabled={isLoading} />
        </div>
      </form>
    </>
  );
}

export default UserForm;
