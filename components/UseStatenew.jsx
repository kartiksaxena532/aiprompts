"use client";
import React from 'react'
import {useState} from "react";

const initialState = {
    name :"",
    city:'',

}
const UseStatenew = () => {
    const [formState, setFormState] = useState(initialState);

  return (
    <div>
        <input type="text" name="name" placeholder='Enter Name' className='py-3 px-4 rounded'/>
        <select name="city" className='py-3 px-5 mt-6 rounded ring-1'>
            <option value={" "} id= "">
                Select City
            </option>
            <option value={"Aligarh"} id= "aligarh" className='py-3 px-5 mt-6 rounded ring-1'>
                Aligarh
               
            </option>
            <option value={"Almora"} id= "almora" className='py-3 px-5 mt-6 rounded ring-1'>
                Almora
            </option>
            <option value={"Noida"} id= "Noida" className='py-3 px-5 mt-6 rounded ring-1'>
                Noida
            </option>
        </select>
    </div>
  )
}

export default UseStatenew;