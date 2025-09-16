import React from 'react'
import { useSelector } from 'react-redux'

export const NewComments = () => {
  const userComment = useSelector((state)=> state.userComments.Comments)
  return (
    <div className='commentSection'>
    Comments: 
   {
    userComment.map((pichi, index)=>
    <ul key={index}>
      <li>{pichi}</li>
    </ul>
  )
   }

</div>
  )
}
