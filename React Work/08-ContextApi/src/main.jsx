// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './Context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserContext>     {/* now app is a children of UserContext.jsx */}
    <App />
  </UserContext>
)