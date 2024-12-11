import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin4Line } from "react-icons/ri";

const Home = () => {

  const [users, setUsers] = useState([]);
  const [input, setInput] = useState({
    name: "",
    email: ""
  });
  
  useEffect(() => {
    try {
      const getAllData = async () => {
        const res = await axios.get("http://localhost:8000/users");
        setUsers(res.data);
      };
      getAllData();
    } catch (error) {
      console.log(error);
    }
  }, [users]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/users",input);
    setInput({
      name: "",
      email: "",
    });
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/users/${id}`);

    const newUsers = users.filter((user)=>{
      return user.id !== id;
    })
    setUsers(newUsers);

  }

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col justify-center items-center gap-2 bg-slate-900 text-white p-9">
          <h1 className="text-6xl leading-none font-black">CRUD API</h1>
          <h3 className="text-xl text-yellow-100">
            Create - Read - Update - Delete
          </h3>
        </div>
        <div className="w-full flex justify-center items-start flex-nowrap">
          <div className="w-1/2 shrink-0">
            <div className="w-1/2 p-6 m-5 ">
              <h1 className="text-3xl mb-5 text-black font-bold">
                ADD NEW USER
              </h1>
              <form onSubmit={(e)=>{handleSubmit(e)}}>
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
                    placeholder="john"
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
                    placeholder="example@gmail.com"
                    onChange={(e)=>{
                      setInput({ ... input, [e.target.name] : e.target.value})
                    }}
                    value={input.email}
                    required
                  />
                </div>
                <div>
                  <button className="w-full bg-blue-500 py-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2 p-7 shrink-0 mx-auto">
            <table className=" table-auto border-collapse mx-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-left">ID</th>
                  <th className="px-4 py-2 border-b text-left">Name</th>
                  <th className="px-4 py-2 border-b text-left">Email</th>
                  <th className="px-4 py-2 border-b text-left">Edit</th>
                  <th className="px-4 py-2 border-b text-left">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user) => {
                    return (
                        <tr>
                          <td className="px-4 py-2 border-b">{user.id}</td>
                          <td className="px-4 py-2 border-b">{user.name}</td>
                          <td className="px-4 py-2 border-b">{user.email}</td>
                          <td className="px-4 py-2 border-b text-center">
                            <Link className="bg-blue-500 text-white px-2 py-2 rounded flex items-center justify-center" to={`/edit/${user.id}`} >
                              <FiEdit color="#fff" size="1rem"/>
                            </Link>
                          </td>
                          <td className="px-4 py-2 border-b text-center">
                            <button 
                            className="bg-red-500 text-white px-2 py-2 rounded"
                            onClick={()=>{handleDelete(user.id)}}>
                              <RiDeleteBin4Line color="#fff" size="1rem"/>
                            </button>
                          </td>
                        </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
