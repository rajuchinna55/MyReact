import { type } from '@testing-library/user-event/dist/type';
import { error } from 'jquery';
import React, { useEffect, useReducer } from 'react'
const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const initailReducer={
    loading: true,
    data:null,
    error: null,
}
const dataReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return{...state, loading:true, error: null}
            break;
        case FETCH_SUCCESS:
            return{...state, loading:false, data:action.payload}
            break;
        case FETCH_FAILURE:
            return{...state, loading:false, data:action.payload}
            break;
    
        default:
           return state;
    }
}

export const UseReducerEx2 = () => {
    const [state, dispatch] = useReducer(dataReducer, initailReducer)

    const handleData = async() =>{
       try {
        dispatch({type:FETCH_INIT})
        const response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot")
        const Newdata = await response.json()
        dispatch({type:FETCH_SUCCESS, payload:Newdata.photos})
       } catch (error) {
        dispatch({FETCH_FAILURE})
       }

    }
    useEffect(() =>{
        handleData()
    },[])
  return (
    <div>
        <div>UseReducerEx2</div>
        api
        <div>{state.loading && <p>api loading...</p>}</div>
        <div>{state.data && <div>{
            state.data.map((item)=>{
                return(
                    <ul>
                        <li>
                           <img src={item.img_src} alt="" />
                        </li>
                    </ul>
                )
            })
            }</div>}</div>
            <div>{state.error && <p>{alert(state.error)}</p>}</div>
    </div>
  )
}
