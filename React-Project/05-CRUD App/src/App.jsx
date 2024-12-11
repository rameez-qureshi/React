import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Edit from './pages/Edit'

// I can store the data in a server api - So you need to run the server.
 
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
