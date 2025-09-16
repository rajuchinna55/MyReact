import React, { useState } from 'react'

export const Mousehover = () => {
    const [hover, setHover]=useState("red")
    const handleMouseOver = () =>{
     setHover("black")
    }
    const handleMouseOut = () =>{
        setHover("red")
    }
  return (
    <div>
        <div>Mousehover</div>
        <button style={{backgroundColor: hover, color:'white'}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>MouseHover</button>
    </div>
  )
}
