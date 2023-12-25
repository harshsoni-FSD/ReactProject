import React ,{useEffect,useState}from 'react';
import { useLoaderData } from 'react-router-dom';
export default function GitHub(){
    const data=useLoaderData()
    // const [data,setData]=useState([]);
    // //api call krna chahta hun jb component load ho to useEffect use krtee jesse he component mount hoga useEffect call
    // //first then me resposnse milega string me toh hmne json me convert kr diya
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>{console.log(data)
    //     setData(data)})
    // },[])
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            Github Followers:{data.followers}
            <img src={data.avatar_url} alt='Git Picher' width={300}/>
        </div>
    )
 }
  export const githubInfoLoader =async()=>{
    const response=await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()//this is basically a promise jisko hm return kr paa rhe h
  }
