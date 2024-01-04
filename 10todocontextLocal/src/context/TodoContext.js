import React ,{createContext,useContext} from "react";
 export const TodoContext=createContext({
    //default values
    todos:[ //property
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    //is todo se hmara compenent koi sa bhi ho hm value yha se lelenge
   //hm yha functionalities likhte hh unke definations nahi
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompelete:(id)=>{}
    //addTodo ek essi functionality isme aap muje ek todo pass kroge(message) to ek
    //function kuch kaam krega kya kaam krega ye sb hm bahar main.jsx me defini krenge

 })
//jb bhi useContext rkh loge toh us use context ko ek context dena hoga
 export const useTodo=()=>{
    return useContext(TodoContext);
 }
 //yha se provider bhi export krna hoga vha main file me hme nahi krna sbkuch wrap krna pdega toh yahi krdo
 export const TodoProvider=TodoContext.Provider

 //Local Storage is browser ka local storage like our application is loaded toh ho skta hh hmne todo add 
 // kr rkhe ho to hme useEffect use krna hoga kb appliaction load ho hmare todo local storage ke aaye