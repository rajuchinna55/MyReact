import React from 'react';
import { ApiCompEx2 } from './ApiCompEx2';
import { useCustomApi } from './useCustomApi';

const URL = "https://jsonplaceholder.typicode.com/users";

export const ApiComp = () => {
    const { loading, data, error } = useCustomApi(URL);

    return (
        <div className="container">
            <h5>ApiComp</h5>
            {loading && <h1>Please wait, data is loading...</h1>}
            
            {!loading && !error && data.map((apidata) => (
                <ul key={apidata.id}>
                    <li>{apidata.name}</li>
                    <li>{apidata.email}</li>
                </ul>
            ))}

            {error && <h1 className="text-danger">Fetch Failure...</h1>}
            
          
            <ApiCompEx2 />
        </div>
    );
};
