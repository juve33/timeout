import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Login from './features/auth/Login';
import Nav from './includes/Nav';
import Home from './includes/Home';
import EditTask from './features/tasks/EditTask';
import NewTask from './features/tasks/newTask';
import Prefetch from './features/auth/Prefetch';
import NewUserForm from './features/users/NewUserForm';
import EditUser from './features/users/EditUser';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="new" element={<NewUserForm />} />
        <Route element={<Prefetch />}>
          <Route path="home" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="updatepersdata" element={<EditUser />} />
            <Route path=":id" element={<EditTask />} />
            <Route path="newTask" element={<NewTask />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
