import React, { createContext } from 'react';

export const DataContext = createContext()

const UserContext = ({children}) => {

    const UserData = {
        username: "rameez",
        age: 25,
        city: "Karachi"
    }

    return ( 
        <>                               {/* UserContext data is available to use anyone */}
        <DataContext.Provider value={UserData}>
        <h1>Hi from usercontext</h1>
        {children}         {/* SHOW APP DATA ON WINDOW BY THIS */}
        </DataContext.Provider>
        </>
     );
}
 
export default UserContext;