import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newComments } from './ReduxSlice/CommentSlice'

export const CommentForm = () => {
  const [comment, setComment]= useState("")
  const dispatch = useDispatch()

  const HanadleChange=(e)=>{
 setComment(e.target.value)
  }
const HandleSubmit=(e)=>{
  e.preventDefault();
  dispatch(newComments(comment))
  setComment("")
}
  return (
    <div>
        <form className='formSection' onSubmit={HandleSubmit}>
            <h4>Leave your comment</h4>
            <div className="commentInput">
                <textarea  id="" cols="50" rows="4" value={comment} onChange={HanadleChange} required></textarea>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
