import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const Edit = () => {

  const navigate = useNavigate();
  const { id } = useParams(); 
  const [input, setInput] = useState({
    name: "",
    email: ""
  });

  useEffect(() => {
    try{
      const getDetails = async () => {
        const res = await axios.get(`http://localhost:8000/users/${id}`);
        setInput(res.data)
      }
      getDetails();
    }catch(error){
      console.log(error)
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try{
      await axios.put(`http://localhost:8000/users/${id}`, input);
      navigate("/");
    } catch (error){
      console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <div className="flex flex-col justify-center items-center gap-2 bg-slate-900 text-white p-12">
          <h1 className="text-5xl leading-none font-black">UPDATE</h1>
        </div>
        <div className="w-3/4 p-6 mx-auto">
              <h1 className="text-3xl mb-5 text-black font-bold ">
                Enter New Details
              </h1>
              <form onSubmit={handleUpdate}>
                <div className="mb-4">
                  <label
                    htmlFor="exampleInputname"
                    className="block text-sm font-semibold mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="exampleInputname"
                    name="name"
                    className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=>{
                      setInput({ ... input, [e.target.name] : e.target.value})
                    }}
                    value={input.name}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="exampleInputemail"
                    className="block text-sm font-semibold mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="exampleInputemail"
                    name="email"
                    className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e)=>{
                      setInput({ ... input, [e.target.name] : e.target.value})
                    }}
                    value={input.email}
                    required
                  />
                </div>
                <div>
                  <button className="w-24 my-4 bg-blue-500 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Done
                  </button>
                </div>
              </form>
              <Link to="/" className="text-black rounded-lg hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    - Back To Home -
              </Link>
            </div>
            
      </div>
    </>
  )
}

export default Edit
