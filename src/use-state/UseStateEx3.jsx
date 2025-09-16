import React, { useState } from 'react'
import './style.css'

export const UseStateEx3 = () => {

    const [tab, setTab] = useState(1)

    const HandleTab=(tabs)=>{
        setTab(tabs)
    }

  return (
    <div>Tabs ex:
        <ul className='d-flex gap-5' style={{listStyle:"none"}}>
            <li className={`cursor-pointer bg-primary px-2 ${tab ===1? "active": "" }`} style={{cursor:"pointer"}} onClick={()=> HandleTab(1)}>A</li>
            <li className={`cursor-pointer bg-primary px-2 ${tab ===2? "active": "" }`} style={{cursor:"pointer"}} onClick={()=> HandleTab(2)}>B</li>
            <li className={`cursor-pointer bg-primary px-2 ${tab ===3? "active": "" }`} style={{cursor:"pointer"}} onClick={()=> HandleTab(3)}>C</li>
        </ul>
        <div>
            <p className={`d-none ${tab ===1? "active": "" }`}>Lorem, ipsum dolor1.</p>
            <p className={`d-none ${tab ===2? "active": "" }`}>tab2.</p>
            <p className={`d-none ${tab ===3? "active": "" }`}>tab3.</p>
        </div>
    </div>
  )
}
