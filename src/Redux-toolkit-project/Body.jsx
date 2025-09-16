import React, { useState } from 'react';
import { NewUser } from './NewUser';
import {NewComments} from './NewComments'
import { UserForm } from './UserForm';
import { CommentForm } from './CommentForm';
import { useDispatch } from 'react-redux';
import { increment } from './ReduxSlice/LikeSlice';

export const Body = () => {
    const [userform, setUserform] = useState(false)
    const [commentform, setCommentform] = useState(false)
    const dispatch = useDispatch()

    const HandleClick=()=>{
        setUserform((use) => !use);
        setCommentform(false)
        
    }
    const HandleComment=()=>{
        setCommentform((comment)=> !comment);
        setUserform(false)
    }
        const HandleLicks=()=>{
        dispatch(increment())
        }

  return (
    <div>
         <div className='postSection ' >
    <div className="poster">
    <div className="postImage">
             <img src="images/bird-8788491_1280.webp"  width={300} height={150} alt="" />
         </div>
         <div className="postButtons">
             <button onClick={HandleClick}>Subscribe</button>
             <button onClick={HandleComment}>Comment</button>
             <button onClick={HandleLicks}>Like</button>
         </div>
         <div className="userForm">
            <div>{userform && <UserForm />}</div>
            <div>{commentform && <CommentForm />}</div>
         </div>
      
    </div>
         <div className="subSection">
             <NewUser />
             <NewComments />
         </div>
     </div>
    </div>
  )
}
