import React from "react";

const Card1 = (props) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={props.src} alt="Card Image" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{props.title}</h2>
            <p className="text-gray-700 text-base mb-4">Name is {props.name} and age is {props.age}</p>
        </div>
    </div>
    </>
  );
};

export default Card1;