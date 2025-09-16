import { createSlice } from "@reduxjs/toolkit";


const FormSlice = createSlice({
    name:"formdata",
    initialState:[],
    reducers:{
        updatedForm:(state, action)=>{
            state.push(action.payload);
        },

        // Withdraw:(state, action)=>{
        //     state.amount -= action.payload
        // },
        // Deposit:(state, action)=>{
        //     state.amount += +action.payload
        // },
        Reset:(state)=>{
          return [];
        }
        
    }
})

export const {updatedForm, Withdraw, Deposit, Reset} = FormSlice.actions
export default FormSlice.reducer