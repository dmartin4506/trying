import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Home from './routes/Home';
import Pricing from './routes/Pricing'
import Register from './routes/auth/RegisterPage';
import LoginPage from './routes/auth/LoginPage';


function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginPage' element={<LoginPage />} />
        <Route path='/RegisterPage' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
