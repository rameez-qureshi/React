import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    console.log(response.data);
    setData(response.data)
  }

  return (
    <>
      <button onClick={getData} className='block p-5 bg-teal-500 m-2'>Click</button>
      {data.map(function(e,idx){
        return (
          <div key={idx} className='inline-block'>
            <h1>{e.author}</h1>
            <img src={e.download_url} alt="w8" width="200" />
          </div>
      )
      })}
    </>
  )
}

export default App
