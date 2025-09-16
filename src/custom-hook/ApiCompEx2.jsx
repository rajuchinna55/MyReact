import React from 'react'
import { useCustomApi } from './useCustomApi';

const URL = "https://jsonplaceholder.typicode.com/users";

export const ApiCompEx2 = () => {
    const { loading, data, error } = useCustomApi(URL);
  return (
    <div><h1>ApiCompEx2</h1>
        {loading && <h1>loading...</h1>}
        {
            !loading && !error && data.map((apidata)=>
                <ul key={apidata.id}>
                    <li>{apidata.name}</li>
                    <li>{apidata.email}</li>
                </ul>
            )
        }
        {error && <h1 className="text-danger">Fetch Failure...</h1>}
    </div>
  )
}
