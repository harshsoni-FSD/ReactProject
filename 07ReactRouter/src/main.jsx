import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import User  from './Components/User/user.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import GitHub, { githubInfoLoader } from './Components/Github/Github.jsx'
// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//          path:"", // path me kuch nahi kyu ki slash pr bhi toh kuch na kuch display krunga
//          element:<Home/>
//       },{
//         path:"about",
//         element:<About/>
//       },
//       {
//         path :"contact",
//         element:<Contact/>
//       }

//     ]
//   }
// ])
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      //I we want to fetch data from api toh hm api calls yahi se he maar krte hh 
      loader={githubInfoLoader}
      path ='github' 
      element={<GitHub/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/*  router provider is a wrapper that isme sb kuch lapet diya h ye router bna kr de deta h */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
