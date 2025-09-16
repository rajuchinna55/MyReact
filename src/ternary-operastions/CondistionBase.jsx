import React, { useState } from 'react'
import { Spage } from './Spage'
import { Fpage } from './Fpage'

export const CondistionBase = () => {
    const [a1, setA1] = useState(true)
  return (
    <div>CondistionBase
        <br />
        {/* {a1? <Spage />: <Fpage/> } */}
        {a1? <Spage /> : <Fpage />}
        
    </div>
   
  )
}
