import React from 'react';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/CArd';

function App() {

  const Data = [
    {
      "name": "Alice Johnson",
      "age": 28,
      "city": "New York",
      "profession": "Web Developer",
      "profilePhoto": "https://webappdigitals.com/wp-content/uploads/2024/09/logodemo8.webp"
    },
    {
      "name": "Michael Smith",
      "age": 34,
      "city": "Los Angeles",
      "profession": "Graphic Designer",
      "profilePhoto": "https://webappdigitals.com/wp-content/uploads/2024/09/logodemo7.jpg"
    },
    {
      "name": "Sarah Brown",
      "age": 22,
      "city": "Chicago",
      "profession": "Data Analyst",
      "profilePhoto": "https://webappdigitals.com/wp-content/uploads/2024/09/logodemo2.webp"
    },
    {
      "name": "David Wilson",
      "age": 45,
      "city": "Houston",
      "profession": "Project Manager",
      "profilePhoto": "https://webappdigitals.com/wp-content/uploads/2024/09/logodemo3.webp"
    }
  ]  

  return (
    <>
      <div className="bg-gray-500 flex flex-wrap items-center justify-center gap-8 p-8">
        {Data.map(function(elem,index){
          // console.log("JDJAS")
          return <Card key={index} src={elem.profilePhoto} title={elem.profession} name={elem.name} age={elem.age} city={elem.city}/>
        })}
      </div>
    </>
  )
}

export default App
