import React, { useState } from 'react'

export const Dbclick = () => {
const [msg, setMsg]=useState("venni")
const handleDoubleClick = () =>{
    setMsg("ice cream")
}
const handleSingleClick = () =>{
    setMsg("venni")
}
  return (
    <div>
        <div>Dbclick</div>
        <h1>{msg}</h1>
        <button onDoubleClick={handleDoubleClick} onClick={handleSingleClick}>Dark</button>
    </div>
  )
}
