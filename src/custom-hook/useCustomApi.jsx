import React, { useState, useEffect } from 'react'

export const useCustomApi = (URL) => {
  const [loading,setLoading]=useState(false);
   const [data,setData]=useState([])
   const [error,setError]=useState(false)

   const FetchApi=async()=>{
    setLoading(true);
    setError(false);
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(true);
        }     
   }
   useEffect(() => {
    FetchApi();
}, []); 
return { loading, data, error }; 
}
