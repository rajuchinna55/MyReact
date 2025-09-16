import { createSlice } from "@reduxjs/toolkit";

export const LikeSlice= createSlice({

    name:'likecounter',

    initialState:{
        value: 0,
    },

    reducers:{
        increment:(state) =>{
        state.value +=1
        //x = x+1
    }
    }
})

export const {increment} = LikeSlice.actions

export default LikeSlice.reducer