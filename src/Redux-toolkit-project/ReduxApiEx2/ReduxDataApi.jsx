import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchData } from './ReduxDataApiSlice'
import { logDOM } from '@testing-library/react';

export const ReduxDataApi = () => {
    const dispatch= useDispatch();
    const loading = useSelector((state)=> state.reduxdataApi.loading);
    const data = useSelector((state)=> state.reduxdataApi.data);
    const error = useSelector((state)=> state.reduxdataApi.error)
    useEffect(()=>{
        dispatch(FetchData())
    },[])
  return (
    <div>
        <div>ReduxDataApi EX2</div>
        {
            loading === "loading" && <h1>data loading Please wait</h1>
        }
        {
            loading == "completed" && error == false && (
               <div>
                 {
                    data.map((apiData,index) =>
                        <ul key={index}>
                    <li>{apiData.title}</li>
                    <li><img src={apiData.url} width={300} alt="" /></li>
                    </ul>
                    )
                }
                </div>
            )
        }
         {loading === "error" && <h4 className='text-danger text-center'>{error}</h4>}
    </div>
  )
}
