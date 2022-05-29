import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';
import Dashboard from './component/Dashboard/Dashboard';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';

const App = () => {
  return (
    <div className='nav'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
};

export default App;