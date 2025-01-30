import React from 'react'
import { IoAddCircle } from "react-icons/io5"
import { CiSearch } from "react-icons/ci";

function InputAddSection({setOnForm, searchedInput, setSearchedInput}) {
  return (
    <>
    <div className="input w-100 flex justify-center items-center md:m-2 gap-2">
        <div className='flex relative '>
            <CiSearch className='absolute m-[5px]'/>
            <input type="search" className=' rounded-lg bg-transparent text-center border-[2px]' placeholder='Search Contact' 
            onChange={(e)=>{
              e.preventDefault();
              setSearchedInput(e.target.value)
            }}
            />
        </div>
            <IoAddCircle onClick={()=>setOnForm(true)} className='text-[40px] text-white'/>
    </div>
    </>
  )
}

export default InputAddSection