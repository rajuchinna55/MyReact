import React, { useState } from 'react'

export const MouseEnter = () => {
    const [nmChange, setNmChnage]= useState("email")

    const handleMouseEnter = () =>{
        setNmChnage("Name")
    }

  return (
    <div>
        <div>MouseEnter</div>
        <input type="text" onMouseEnter={handleMouseEnter} placeholder={nmChange} />
    </div>
  )
}
