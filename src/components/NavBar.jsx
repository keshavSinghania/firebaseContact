import React from 'react'

function NavBar() {
  return (
    <div className="w-[65vw] h-[50px] m-auto md:m-auto md:mt-2 rounded-lg text-[20px] font-bold bg-white flex items-center justify-center md:max-w-[50vw] flex-grow mt-2 ">
        <img src="\src\components\logo.png" alt="logo" />
        <h2 className='text-black'>Firebase Contact App</h2>
    </div>
  )
}

export default NavBar