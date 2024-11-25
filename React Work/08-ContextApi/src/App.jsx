import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>          {/* App.jsx is a children of UserContext.jsx (goto main.jsx and see) */}


      {/* CONTEXT API MEANS CENTRALIZED DATA (EVERYONE USE DATA DIRECTLY) */}
      <h1>Hi from APP</h1>
    </>
  )
}

export default App
