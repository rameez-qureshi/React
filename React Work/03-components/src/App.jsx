import React, { useState } from "react";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <h1 className='text-center font-bold text-5xl p-7'>BODY</h1>
      <Footer />
    </>
  )
}

export default App;
