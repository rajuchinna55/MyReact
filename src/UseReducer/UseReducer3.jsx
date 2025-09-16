import React, { useEffect, useReducer } from 'react';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
    loading: true,
    data: null,
    error: null,
};

const dataHandle = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return { ...state, loading: true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export const UseReducer3 = () => {
    const [state, dispatch] = useReducer(dataHandle, initialState);

    const handleData = async () => {
        try {
          dispatch({ type: FETCH_INIT });
    
          const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
          // This block is not reached if the domain is invalid
          if (!response.ok) {
            throw new Error("api url not valid");
          }
    
          const newData = await response.json();
          dispatch({ type: FETCH_SUCCESS, payload: newData });
    
        } catch (error) {
          console.error("Fetch error:", error);
    
          // Custom message if fetch fails due to network/domain error
          const errorMsg =
            error.message === 'Failed to fetch'
              ? 'API is not valid or unreachable'
              : error.message;
    
          dispatch({ type: FETCH_FAILURE, payload: errorMsg });
        }
      };

    useEffect(() => {
        handleData();
    }, []);

    return (
        <div>
            <div>UseReducer3</div>
            <div>
                {state.loading && <div>Loading ....</div>}
                {state.data && (
                    <div>
                        {state.data.map((item) => (
                            <ul key={item.id}>
                                <li>{item.name}</li>
                            </ul>
                        ))}
                    </div>
                )}
                {state.error && <div style={{ color: "red" }}>Error:{state.error}</div>}
            </div>
        </div>
    );
};
