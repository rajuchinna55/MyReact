import React from 'react'
import { useSelector } from 'react-redux'

export const RedexNavbar = () => {
    const LikeCount = useSelector((state)=> state.likecounter.value);
    const NewSubscriber = useSelector((state)=> state.subscribers.Subscribers);
    const commentcount = useSelector((state)=> state.userComments.Comments)
  return (
    <div>
            <div className='navSection'>
        <div className="navTitle">
            Redux
        </div>
        <div className="navUser">
            Subscribers: {NewSubscriber.length}
        </div>
        <div className="navComments">
            Comments: {commentcount.length}
        </div>
        <div className="navLikes">
            Likes: {LikeCount}
        </div>
    </div>
    </div>
  )
}
