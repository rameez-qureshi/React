// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react';
import { useState } from 'react';


const App = () => {
    
    // const user = "WAD";                      // variable in js
    const [a, setA] = useState('WAD');          // variable in react js

    const changeUser = () => {
        setA("MRQ")
    }

    const [b, setB] = useState(0);
    const Increment = () => {
        setB(b+10)
    }
    const Decrement = () => {
        setB(b-10)
    }

    return ( 
        <div>
             <h1 className="p-1 text-6xl bg-red-700">User is {a}</h1>    {/* use 'className' in jsx bcz class is reserved. */}
             <button onClick={changeUser}>Change User</button>
            <h1>Number is {b}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
     );
}

export default App;