import React,{useState,useContext} from "react";
import UserContext from "../context/UserContext";

function Login(){
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const {setUser} =useContext(UserContext); //setUser ka access muje useContext se mill raa hh useContext me vo context dena pdta hh
    const handleSubmit=(e)=>{
        e.preventDefault();
         //event ka default behaviour prevent krna hh ye kyu kiya beacuse
                            //by default agar apn submit krte h toh value url ke through kahi na kahi chli jaati h ya 
                            //post method ke thorugh chlii jaati h
        setUser({username,password}) //ye toh data bhejne ki baat hh
    }
    return (
        <div>
            <h2>Login</h2>
            <input type='text' 
            value={username}
            onChange={(e)=>{
                setUsername(e.target.value);
            }}
            placeholder="username" />
            {" "}
            <input type='text' 
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
 export default Login