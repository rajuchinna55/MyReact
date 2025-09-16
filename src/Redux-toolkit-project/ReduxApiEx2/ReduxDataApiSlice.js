import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";

export const FetchData= createAsyncThunk('user', async()=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        const UserData = await response.json()
        return UserData
    } catch (error) {
        throw error
    }
})

export const ReduxDataApi= createSlice({
    name:"reduxdataApi",
    initialState:{
        loading:"",
        data:[],
        error:false,
    },
    extraReducers:(rk)=>{
        rk.addCase(FetchData.pending, (state)=>{
            state.loading="loading"
        })
        .addCase(FetchData.fulfilled, (state,action)=>{
            state.loading="completed";
            state.data=action.payload
        })
        .addCase(FetchData.rejected,(state, action)=>{
            state.loading="error";
            state.data=[];
            state.error= action.error.message
        })
    }
})

export const{extraReducers}= ReduxDataApi.actions
export default ReduxDataApi.reducer