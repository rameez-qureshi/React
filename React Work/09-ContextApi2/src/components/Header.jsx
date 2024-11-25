import React, { useContext } from 'react';
import { DataContext } from '../Context/UserContext';

const Header = () => {

    const data = useContext(DataContext)

    return ( 
        <>
        <h1>Hi from Header: {data.age}</h1>
        </>
     );
}
 
export default Header;