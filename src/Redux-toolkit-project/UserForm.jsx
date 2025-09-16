import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newuser } from './ReduxSlice/SubscriberSlice';

export const UserForm = () => {
  const [newSubscriber,setNewSubscriber]= useState('')
  
  const dispatch = useDispatch()

  const handleChanage=(e)=>{
    setNewSubscriber(e.target.value);
  }
  const Handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(newuser(newSubscriber));
    setNewSubscriber("")
  }
  return (
    <div >
    <form className='formSection' onSubmit={Handlesubmit}>
        <h4>User Name</h4>
        <div className="userInput">
            <input type="text" value={newSubscriber} required onChange={handleChanage} />
            <button type='submit'>Submit</button>
        </div>
    </form>
</div>
  )
}
