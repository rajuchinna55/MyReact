import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UserDataApi = createAsyncThunk('user/fetch', async()=>{
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data
} catch (error) {
    throw error
}
})

const DataApi = createSlice({
    name:"UserData",

    initialState:{      
        status:"",
        user:[],
        error: false,
    },

    
    //pending,fulfilled,error(rejected)
    extraReducers:(builder)=>{
       builder.addCase(UserDataApi.pending,(state)=>{
        state.status="loading"
       })
       .addCase(UserDataApi.fulfilled,(state, action)=>{
        state.status="Completed";
        state.user=action.payload
       })
       .addCase(UserDataApi.rejected,(state,action)=>{
        state.status="error";
        state.user=[];
        state.error=action.error.message
       })
    }
})

export const {extraReducers} = DataApi.actions
export default DataApi.reducer
