import React, { useState } from 'react'

export const UseStateEx4 = () => {
    const [model, setModel]= useState()

    const HandleModel=(mdlimg)=>{
        setModel(mdlimg)
    }
    const HandleClose=()=>{
        setModel()
    }
  return (
    <div>UseStateEx4
        <div className='d-flex gap-5'>
            <img width="300" style={{cursor:"pointer"}} onClick={()=>HandleModel("images/aqua-1.png")} src="images/aqua-1.png" alt="" />
            <img width="300" style={{cursor:"pointer"}} onClick={()=>HandleModel("images/bird-8788491_1280.webp")} src="images/bird-8788491_1280.webp" alt="" />
        </div>
       {
        model && 
        <div className="model">
        <div className="inner-img">
        <img src={model} alt="img" />
        <button onClick={HandleClose}>close</button>
        </div>
     </div>
       }
    </div>
  )
}
