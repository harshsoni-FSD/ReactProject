import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
 const [todos,setTodos]=useState([])//todos me saare todos hh todo todos nahi hh
const addTodo=(todo)=>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev]) //yaha hm agar direct set krenge toh purani values remove ho jayegi 
  //so hme purani state ka access chaiye ki kiten todos the apne pass
}
const updatedTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo)))
}
//delete ke liye map accchi approach nahu hh hme delete krna h toh array me vo id ke liye delete krna hh
//and new array bnana hh jisme vo id vala todo na ho baaki saari hh
const deleteTodo=(id)=>{
  setTodos((prev)=>prev.filter((todo)=>todo.id!==id))//jo match ho jayega vo return hoga hee nahi baaki return ho jayega

}
const toggleCompelete=(id)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo)) //if true hua to baaki saari value as it is

  //rkho and bss ke valie change krdo to we know spread operator use hoga 
}
//jb tk app react me serverside rendering ki baat naa kr rhe ho tb tk local storage aayega

useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])




  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,updatedTodo,toggleCompelete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          todos.map((todo)=>(
                            <div key={todo.id}
                            className='w-full'>
                              <TodoItem todo={todo}/>

                            </div>//loop me ye div repeat hoga or hr div unquie hh yaa nahi vo keys se ptaa lgega
                            //key nahi use kri toh warning dega pr aage performanec bohot degrade ho jaati hh
                          ))// curly bracse lgaya map toh return krna pdega
                          //return nahi likhna toh parenthesis lgaa skte hh uske mtlb auto retun hota hh
                        }
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
