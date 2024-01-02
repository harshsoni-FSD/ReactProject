import React ,{useContext}from "react";
import UserContext from "../context/UserContext";
 function Profile(){
    const {user}=useContext(UserContext); //yaha data lena hh
    if(!user){
        return(<div>Please login</div>)
    }
    else{
        return <div>Welcome {user.username}</div>
    }
   
 }
 export default Profile