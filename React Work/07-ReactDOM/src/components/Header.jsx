import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <>
        <header className="bg-blue-600 p-4 flex justify-between items-center">
            <h1 className="text-white text-2xl">React Practise</h1>
            <div>
                <Link to='/' className="font-bold bg-white text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-200">Home</Link>
                <Link to='/about' className="font-bold bg-white text-blue-600 px-4 py-2 rounded mr-2 hover:bg-gray-200">About</Link>
                <Link to='/contact' className="font-bold bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Contact</Link>
            </div>
        </header>
        </>
     );
}
 
export default Header;