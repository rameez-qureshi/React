import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    

    const navigate = useNavigate();

    const presentUser = JSON.parse(localStorage.getItem("loggedIn"));
    // console.log(presentUser)

    const handleLogout = (e) => {
        localStorage.removeItem("loggedIn")
        navigate("/login")  
    }

  return (
    <>
      <button 
      onClick={(e)=>{
        handleLogout(e)
      }}
      className='absolute top-7 right-8 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-[500ms]'>
            Logout
      </button>
      <div className="h-screen bg-black flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Hello, {presentUser.name}</h1>
        <div className="absolute top-7 left-8 text-white text-base font-bold underline">HOMEPAGE</div> 
      </div>
    </>
  )
}

export default Home
