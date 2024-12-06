import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    
    const [regInput, setRegInput] = useState({
        name: '',
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const registerHandler = (e) => {
        e.preventDefault();
        // localStorage.setItem("user",JSON.stringify(regInput));


        // Get existing data from localStorage or initialize an empty array
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Add new user to the array
        storedUsers.push(regInput);

        // Save updated array back to localStorage
        localStorage.setItem("users", JSON.stringify(storedUsers));

        // Clear the form
        setRegInput({ name: "", email: "", password: "" });

        alert("User added successfully!");

        navigate("/login");
    }

  return (
    <>
      <div className=" bg-black flex justify-center items-center h-screen">
        <div className=" border-4 border-emerald-900 p-8 rounded-3xl">
          <div>
            <form
              onSubmit={(e)=>{
                registerHandler(e)
              }}
              className="flex flex-col justify-center items-end gap-3"
            >
              <input
                type="text"
                className="p-5 w-72 outline-none rounded-xl text-gray-400 text-base border-4 border-emerald-900 bg-transparent placeholder:text-gray-400"
                placeholder="Enter name"
                required
                name="name"
                value={regInput.name}
                onChange={(e) => {
                  setRegInput({
                    ... regInput,
                    [e.target.name]: e.target.value,
                    })
                }}
              />
              <input
                type="text"
                className="p-5 w-72 outline-none rounded-xl text-gray-400 text-base border-4 border-emerald-900 bg-transparent placeholder:text-gray-400"
                placeholder="Enter email"
                required
                name="email"
                value={regInput.email}
                onChange={(e) => {
                  setRegInput({
                    ... regInput,
                    [e.target.name]: e.target.value,
                    })
                }}
              />
              <input
                type="password"
                className="p-5 w-72 outline-none rounded-xl text-gray-400 text-base border-4 border-emerald-900 bg-transparent placeholder:text-gray-400"
                placeholder="Enter password"
                required
                name="password"
                value={regInput.password}
                onChange={(e) => {
                  setRegInput({
                    ... regInput,
                    [e.target.name]: e.target.value,
                    })
                }}
              />
              <button
              type="submit" 
              className="px-6 py-3 text-black bg-emerald-500 rounded-lg shadow-lg hover:text-white hover:shadow-emerald-500/50 transition-all duration-300">
                Register
              </button>
            </form>
            <p className='text-white text-sm'>Already Register. &nbsp; 
                <Link to="/login" className='text-blue-500 text-base'>login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
