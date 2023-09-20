import React from 'react'
import {Routes, Route} from 'react-router-dom'


import Home from './routes/Home';
import Pricing from './routes/Pricing'
import Register from './routes/auth/RegisterPage';



function App() {
  return (
     <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RegisterPage' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
