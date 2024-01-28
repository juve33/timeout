import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useAddNewUserMutation } from '../slices/usersApiSlice';

import UserForm from '../components/UserForm';

const USER_REGEX = /^[A-z]{3,20}$/
const PWD_REGEX = /^[A-z0-9!@#$%]{4,12}$/

function Signup({children}) {

  const [addNewUser, {
    isLoading,
    isSuccess,
    isError
  }] = useAddNewUserMutation()

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    setValidUsername(USER_REGEX.test(username))
  }, [username])

  useEffect(() => {
    setValidPassword(PWD_REGEX.test(password))
  }, [password])

  useEffect(() => {
    if (isSuccess) {
      setUsername('')
      setPassword('')
      navigate('/')
    }
  }, [isSuccess, navigate])

  const canSave = () => [username, password].every(Boolean) && !isLoading

  const onSaveUserClicked = async (e) => {
    e.preventDefault()
    if (canSave()) {
      await addNewUser({ username, password })
      navigate('/')
    }
    try {
      if (canSave()) {
        await addNewUser({ username, password })
        navigate('/login')
      }
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
    }
  }

  return (
    <>
      <UserForm
        onSubmit={onSaveUserClicked}
        errMsg={errMsg}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
        submitButtonText='Register'
        additionalButtonText='To log in'
        additionalButtonOnClick={() => {navigate('/login')}}
      />
    </>
  );
}

export default Signup;
