import React, { useState } from 'react';
import Header from './Header';

const Login = (props) => {

    // console.log(props)

    const submitHandler = (e) => {
        e.preventDefault();
        props.handleLogin(email, password)
        // console.log(email)
        // console.log(password)
        setEmail('')
        setPassword('')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return ( 
        <>
        <Header />
        <div className=' bg-black flex justify-center items-center h-[calc(100vh-64px)]'>
            <div className=' border-4 border-emerald-900 p-8 rounded-3xl'>
                <div>
                    <form onSubmit={(e)=>{
                        submitHandler(e)
                    }} 
                    className='flex flex-col justify-center items-end gap-3'>
                        <input type="text"
                        className='p-5 w-72 outline-none rounded-xl text-gray-400 text-base border-4 border-emerald-900 bg-transparent placeholder:text-gray-400' 
                        placeholder='Enter email' 
                        required
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        <input type="password" 
                        className='p-5 w-72 outline-none rounded-xl text-gray-400 text-base border-4 border-emerald-900 bg-transparent placeholder:text-gray-400'  
                        placeholder='Enter password' 
                        required
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}/>
                        <button className="px-6 py-3 text-black bg-emerald-500 rounded-lg shadow-lg hover:text-white hover:shadow-emerald-500/50 transition-all duration-300">
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Login;