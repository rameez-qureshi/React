import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [username, setUsername] = useState('');

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(username)
    setUsername('')
  }

  return (
    <div className='bg-stone-600 p-2'>
      <h1>FORM HANDLING</h1>

      <form onSubmit={(e)=>{
        submitHandler(e)
      }}> 

        {/* <input className='p-3 focus:outline-none text-xl m-5 rounded' type="text" placeholder='anything'/> */}

        <input 
        value={username}
        onChange={(e)=>{
          setUsername(e.target.value)       // value of input is save in username variable
        }}
        className='p-3 focus:outline-none text-xl m-5 rounded' 
        type="text" 
        placeholder='value save to variable '/>

        <button className='p-3 bg-red-500 font-semibold text-xl m-5 rounded' >Submit</button>

      </form>
    </div>
  )
}

export default App
