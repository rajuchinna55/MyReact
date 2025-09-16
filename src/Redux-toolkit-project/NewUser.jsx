import React from 'react'
import { useSelector } from 'react-redux'

export const NewUser = () => {
  const Subsribers = useSelector((state)=> state.subscribers.Subscribers)
  return (
    <div className='userSection'>
    Subsribers: 
    
      {
        Subsribers.map((user,index)=>{
          return(
            <ul key={index}>
            <li >{user}</li>
            </ul>
          )
        })
      }
   
</div>
  )
}
