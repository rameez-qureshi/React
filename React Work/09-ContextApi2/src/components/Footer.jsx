import React, { useContext } from 'react';
import { DataContext } from '../Context/UserContext';

const Footer = () => {

    const data = useContext(DataContext)

    return ( 
        <>
        <h1>Hi from Footer: {data.city}</h1>
        </>
     );
}
 
export default Footer;