import { Link, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import { useLoginMutation } from '../slices/authApiSlice';

import '../components/Forms.css';
import '../components/Buttons.css';

function Login({children}) {

  const userRef = useRef(null);
  const errRef = useRef(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
      userRef.current.focus();
  }, []);

  useEffect(() => {
      setErrMsg('');
  }, [username, password]);

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const { accessToken } = await login({ username, password }).unwrap();
          dispatch(setCredentials({ accessToken }));
          setUsername('');
          setPassword('');
          navigate('/app');
      } catch (err) {
          if (!err.status) {
              setErrMsg('No Server Response');
          } else if (err.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.status === 401) {
              setErrMsg('Wrong Username or Password');
          } else {
              setErrMsg(err.data?.message);
          }
          errRef.current.focus();
      }
  };

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
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
          <input type="submit" value="Log in" disabled={isLoading} />
        </div>
        {children}
      </form>
    </>
  );
}

export default Login;
