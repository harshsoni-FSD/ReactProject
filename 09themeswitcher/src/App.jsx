import { useEffect, useState } from 'react'

import './App.css'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [count, setCount] = useState(0)
  const [themeMode,setThemeMode]=useState("light");

  const lightTheme=()=>{ //by this defination hamara lightTheme function defination apne aap chli jayegi
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }
//actual change in theme
useEffect(()=>{
document.querySelector('html').classList.remove("light","dark")
document.querySelector('html').classList.add(themeMode)
},[themeMode]) //theme mode me kuch bhi change useEffect vapas run hona chaiye
  return (
    // value ka access lete with help me value={}
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}><div className="flex flex-wrap min-h-screen items-center"> 
    {/* //with the of this we can get access the componenets inside that themeprovoder */}
   <div className="w-full">
             <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <ThemeBtn/>
             </div>

             <div className="w-full max-w-sm mx-auto">
                {<Card/>}
             </div>
         </div>
     </div></ThemeProvider>


  )
}

export default App
