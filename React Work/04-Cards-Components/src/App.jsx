import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'

function App() {

  return (
    <>
      <div className="bg-gray-500 flex items-center justify-center gap-8 p-8">
        <Card1 src='https://webappdigitals.com/wp-content/uploads/2024/09/logodemo8.webp' title='Hero' name='John' age='35'/>
        <Card1 src='https://webappdigitals.com/wp-content/uploads/2024/09/logodemo7.jpg' title='Hero' name='Erin' age='29'/>
        <Card1 src='https://webappdigitals.com/wp-content/uploads/2024/09/logodemo2.webp' title='Hero' name='Algen' age='31'/>
        <Card1 src='https://webappdigitals.com/wp-content/uploads/2024/09/logodemo3.webp' title='Hero' name='Chris' age='25'/>
      </div>
    </>
  )
}

export default App
