import React, { useEffect, useState } from 'react'
import Login from './components/login'
import Register from './components/Register'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

  // const presentUser = JSON.parse(localStorage.getItem("loggedIn"));
  // const [prest, setPrest] = useState('');
  // setPrest(presentUser)

  return (
    <>
    {/* <Login /> */}
    {/* <Register /> */}
    {/* <Home /> */}
    
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
