import React, { useEffect, useState } from 'react'
import CheckboxExample from './EventListeners2';

export const EventListeners = () => {
  const [screenSize, setScreenSize]= useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateReSize = ()=>{
setScreenSize({
  width: window.innerWidth,
  height: window.innerHeight,
})
  };

  useEffect(()=>{
    window.addEventListener('resize', updateReSize);

   return () =>{
    window.removeEventListener('resize', updateReSize)
   }
  },[])

  return (
    <div>
      <div>EventListeners</div>
      <p>Screen width : {screenSize.width}px</p>
      <p>Screen height : {screenSize.height}px</p>

      <div>
        <CheckboxExample/>
        
      </div>
    </div>
  )
}
