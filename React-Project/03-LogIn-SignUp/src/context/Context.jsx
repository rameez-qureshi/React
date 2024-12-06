import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../utils/localstorage';


export const DataContext = createContext();

const Context = ({children}) => {

    const [userData, setUserData] = useState(null);

    useEffect(()=>{
        const credentials = getLocalStorage();
        setUserData(credentials)
        // console.log(credentials)
    },[])

    return ( 
        <>
            <DataContext.Provider value={userData}>
                {children}
            </DataContext.Provider>
        </>
     );
}
 
export default Context;