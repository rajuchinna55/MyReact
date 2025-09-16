import { createSlice } from "@reduxjs/toolkit";

export const subscribersSlice = createSlice({
    name:'subscribers',

    initialState:{
        Subscribers:[]
    },
    
    reducers:{
        newuser:(state, action)=>{
            state.Subscribers.push(action.payload)
        }
    }
})

export const {newuser} = subscribersSlice.actions
export default subscribersSlice.reducer
