import { useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
import { useLoginMutation } from '../slices/authApiSlice';

import UserForm from '../components/UserForm';

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
      <UserForm
        onSubmit={handleSubmit}
        errRef={errRef}
        errMsg={errMsg}
        userRef={userRef}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
        submitButtonText='Log in'
        additionalButtonText='Register'
        additionalButtonOnClick={() => {navigate('/signup')}}
      />
    </>
  );
}

export default Login;
