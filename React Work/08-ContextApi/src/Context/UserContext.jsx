import React from 'react';

const UserContext = ({children}) => {
    return ( 
        <>                               {/* UserContext data is available to use anyone */}
        <h1>Hi from usercontext</h1>
        {children}         {/* SHOW APP DATA ON WINDOW BY THIS */}
        </>
     );
}
 
export default UserContext;