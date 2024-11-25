import React from 'react';

const Cardbtn = (props) => {
    return ( 
        <>
        <button className='bg-red-700 m-2 p-3 font-bold rounded-full hover:bg-red-600'>Btn: {props.name}</button>
        </>
     );
}
 
export default Cardbtn;