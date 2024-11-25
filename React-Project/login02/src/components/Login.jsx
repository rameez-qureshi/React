import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [logInput, setLogInput] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const logInUser = JSON.parse(localStorage.getItem("users"));
        const loggedInUser = logInUser.find((em) => em.email == logInput.email && em.password == logInput.password)
        if(loggedInUser){
            // alert(`Welcome ${loggedInUser.name}, You have successfully logged in.`);
            localStorage.setItem("loggedIn",JSON.stringify(loggedInUser)) 
            navigate("/")
        }else{
            alert("Incorrect Credentials");
        }

    }

  return (
    <>
      <div className=" bg-black flex justify-center items-center h-screen">
        <div className=" border-4 border-emerald-900 p-8 rounded-3xl">
          <div>
            <form
              onSubmit={(e) => {
                loginHandler(e)
              }}
              className="flex flex-col justify-center items-end gap-3"
            >
              <input
                type="text"
                className="p-5 w-72 outline-none rounded-xl text-gray-400 text-base border-4 border-emerald-900 bg-transparent placeholder:text-gray-400"
                placeholder="Enter email"
                required
                name="email"
                value={logInput.email}
                onChange={(e) => {
                  setLogInput({
                    ... logInput,
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
                value={logInput.password}
                onChange={(e) => {
                  setLogInput({
                    ... logInput,
                    [e.target.name]: e.target.value,
                    })
                }}
              />
              <button
              type="submit"
              className="px-6 py-3 text-black bg-emerald-500 rounded-lg shadow-lg hover:text-white hover:shadow-emerald-500/50 transition-all duration-300">
                Login
              </button>
            </form>
            <p className='text-white text-sm'>Not SignUp. &nbsp; 
                <Link to="/register" className='text-blue-500 text-base'>register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
