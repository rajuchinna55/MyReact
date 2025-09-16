import { createSlice } from "@reduxjs/toolkit";

export const CommentSlice = createSlice({
    name:"userComments",

    initialState:{
        Comments:[],
    },

    reducers:{
        newComments:(state, action)=>{
            state.Comments.push(action.payload)
        }
    }
})
export const {newComments} = CommentSlice.actions
export default CommentSlice.reducer