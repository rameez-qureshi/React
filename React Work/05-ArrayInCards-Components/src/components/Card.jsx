import React from "react";
import Cardbtn from "./Cardbtn";

const Card = (props) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={props.src} alt="Card Image" />
        <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{props.title}</h2>
            <h4 className="text-xl font-bold text-stone-500 italic mb-2">{props.city}</h4>
            <p className="text-gray-700 text-base mb-4">Name is {props.name} and age is {props.age}</p>
        </div>
        <Cardbtn name={props.name}/>
    </div>
    </>
  );
};

export default Card;