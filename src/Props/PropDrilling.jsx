import React from 'react'
import { PropDrillingEx2 } from './PropDrillingEx2'

export const PropDrilling = (prop) => {
  return (
    <div>
        <div>PropDrilling</div>
        <ul>
            <li>{prop.product.name}</li>
            <li>{prop.product.mail}</li>
        </ul>
        
    </div>
  )
}

