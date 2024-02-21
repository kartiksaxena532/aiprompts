"use client"
import React from 'react'
import {useEffect,useState} from "react";


function UseEffectHook () {

  
const [count, setCount] =  useState(0);

const [showtext, isShowtext] = useState(false);


useEffect(()=>{
  if (count===5){
    isShowtext(true);
  }
  else if (count ===7){
    isShowtext(false);
  }
},[count])


  return (
    <div>
      <h1 className="text-2xl justify-center">Use effect</h1>
      <p className='text-xl justify-center'>Count is {count}</p>
      {
        showtext ? <h3>Hello bhai rukja</h3> : null
      }
      
      <button className="rounded-lg bg-slate-500 text-center p-4 bg-blend-color-burn"onClick={()=>setCount(count+1)}>Increase Count</button>
    </div>
  )
}

export default UseEffectHook;