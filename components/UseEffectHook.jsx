"use client"
import React from 'react'
import {useEffect,useState} from "react";


function UseEffectHook () {

  
const [count, setCount] =  useState(0);


useEffect(()=>{
  console.log("hello paaji");

},[])


  return (
    <div>
      <h1 className="text-2xl justify-center">Use effect</h1>
      <p className='text-xl justify-center'>Count is {count}</p>
      <h3></h3>
      <button className="rounded-lg bg-slate-500 text-center p-4 bg-blend-color-burn"onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  )
}

export default UseEffectHook;