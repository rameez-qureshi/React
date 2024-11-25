"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    // if (title.trim() === "" || desc.trim() === "") {
    //   alert("Please enter both title and description");
    //   return; // Don't add the task if either is empty
    // }
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    // console.log(mainTask);
  };

  let renderTask = <h2 className="p-5">No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li
          key={i}
          className="flex justify-between items-center bg-emerald-400 p-5 mb-0.5	"
        >
          <div className="mb-8">
            <span className="mb-2 font-semibold text-xl">{t.title}</span>
            &nbsp;&nbsp;&nbsp;
            <span>{t.desc}</span>
          </div>
          <button
            className="bg-red-400 rounded text-sm px-4 py-2"
            onClick={() => {
              deleteHandler(i);
            }}
          >
            Del
          </button>
        </li>
      );
    });
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  return (
    <>
      <h1 className="border-b-2 border-black text-center font-bold text-4xl p-5 bg-gray-300 mb-3">
        TO DO LIST
      </h1>
      <form className="flex flex-col" onSubmit={submitHandler}>
        <input
          type="text"
          className="text-xl border-zinc-800 border-2 rounded m-1 px-4 py-2 w-1/4"
          placeholder="Title here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <textarea
          className="text-xl border-zinc-800 border-2 rounded m-1 px-4 py-2 w-2/4"
          placeholder="Description here..."
          rows="5"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
        <button className="text-white w-28 bg-black px-4 py-3 text-xl font-bold rounded m-1">
          Add
        </button>
      </form>
      <div className="bg-emerald-300 my-4">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
