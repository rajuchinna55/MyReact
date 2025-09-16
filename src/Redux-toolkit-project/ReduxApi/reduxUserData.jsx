import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserDataApi } from './DataApiSlice'

export const ReduxUserData = () => {
    const dispatch = useDispatch();

    const status = useSelector((state) => state.UserData.status);
    const user = useSelector((state) => state.UserData.user);
    const error = useSelector((state) => state.UserData.error)

    useEffect(()=>{
        dispatch(UserDataApi());
    },[])

  return (
   <div>
     <div className='container text-center'><h1 className='text-success mb-5'>ReduxUserData</h1></div>

     {status === "loading" && <h3 className='text-center'>Getting Data Please Wait...</h3>}

    {
        status == "Completed" && error== false && (
            <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
              </tr>
            </thead>
            <tbody>
                {
                            user.map((userdata,index) =>
                                <tr key={index}>
                                    <th>{userdata.id}</th>
                                    <th>{userdata.name}</th>
                                    <th>{userdata.email}</th>
                                    <th>{userdata.address.city}</th>
                                </tr>
                        )
                }
        </tbody>
        </table>
        )
        
    }
   {(status === "error" && <h4 className='text-danger text-center'>{error}</h4>)}

   </div>
  )
}
