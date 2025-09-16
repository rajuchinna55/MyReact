import { type } from '@testing-library/user-event/dist/type';
import { error } from 'jquery';
import React, { useEffect, useReducer } from 'react'

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState ={
    loading:true,
    data:null,
    error:null,
}
const dataReducer = (state, action) =>{
    switch (action.type) {
       case FETCH_INIT:
           return{...state, loading:true, error:null}
           break;
           case FETCH_SUCCESS:
               return{...state, loading:false, data:action.payload}
          break;
          case FETCH_FAILURE:
           return{...state, loading:false, data:action.payload}
       default: 
           return state;
    }
  }


export const UseReducer = () => {
   const [state, dispatch]= useReducer(dataReducer, initialState )

   

   const dataHandler = async() =>{
        try {
            dispatch({type:FETCH_INIT})
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            const NewData = await response.json()
            
            dispatch({type:FETCH_SUCCESS, payload:NewData})
        }
        catch (error) {
            dispatch({type:FETCH_FAILURE})
        }
   }
   useEffect(()=>{
   dataHandler()
   },[])
  return (
    <div>
        <div>UseReducer</div>
        {/* usereducer ante multiple satate ni single way le chupistadi or handle chestadi */}
<div>{state.loading && <div>Loading...</div>}

{state.data && <div>{
    state.data.map((item)=>{
        return(
            <ul key={item.name}>
                <li>{item.name}</li>
            </ul>
        )
    })
    }</div>}

    {state.error && <div>{alert(state.error)}</div>}
</div>
    </div>
  )
}
