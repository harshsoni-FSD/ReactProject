import React, { useState } from "react";
import { useTodo } from "../context";
function TodoForm() {
    const [todo,setTodo]=useState("");
    const {addTodo}=useTodo()

    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        //in new syntax if field and value same h toh hme direct todo bhi likh skte
        // addTodo({todo:todo,completed:false}) //yha hme direct todo pass nahi kr skte vha object bhi spreed hora hh kuch dena to pdega na 
        //spread krne ke liye string nahi de kste so hme object pass krna hoga
        addTodo({todo,completed:false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;