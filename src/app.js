import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Login from './components/Login';
import Nav from './includes/Nav';
import Home from './includes/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<Login />} />
      <Route path="/main" element={<Nav />} >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
