import React from "react";
import UserContext from "./UserContext";
 const UserContextProvider=({children})=>{ //generic name children jo bhi aara hh as it is pass krdo or use krlo
    const [user ,setUser]=React.useState(null);
    return (
    <UserContext.Provider value={{user,setUser}}>
          {children}{/*   jo bhi children aara hh as it is render krva denge */}
    </UserContext.Provider>)
 }
 export default UserContextProvider