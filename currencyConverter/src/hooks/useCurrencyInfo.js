import { useEffect,useState } from "react";
function useCurrencyInfo(currency){
    const [data,setData]=useState({});//with empty object if res not come then set data return empty object
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])//currency me koi bhi change ho to me vapas se isse call krvana chahta hun.
    return data
}
export default useCurrencyInfo; //pura method he return ho jata hh