import React from 'react'
import Background from './components/background'
import Foreground from './components/Foreground'

function App() {
  return (
    <div className='relative w-screen h-screen bg-zinc-800 '>
      <Background />
      <Foreground />
    </div>
  )
}

export default App
