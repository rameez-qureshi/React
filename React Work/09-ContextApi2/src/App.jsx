import { useContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { DataContext } from './Context/UserContext'

function App() {

  const data = useContext(DataContext)

  return (
    <>          {/* App.jsx is a children of UserContext.jsx (goto main.jsx and see) */}


      {/* CONTEXT API MEANS CENTRALIZED DATA (EVERYONE USE DATA DIRECTLY) */}
      <h1>Hi from APP: {data.username}</h1>
      <Header />
      <Footer />
    </>
  )
}

export default App
