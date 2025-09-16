import React from 'react'
import { TableForm } from './TableForm'
import { useSelector } from 'react-redux'

export const Table = () => {
    const Formdata = useSelector((state) => state.formdata)
  return (
    <div>
        <div className='bg-body-secondary container'><TableForm /></div>
        
        
        <div className='container col-10'>
            <h5 className='text-center mb-2'>Table</h5>
        <table className="table ">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile Number</th>
    </tr>
  </thead>
  <tbody>
 {
    Formdata.map((data,index) =>
     <tr key={index}>
        <td>{data.name}</td>
        <td>{data.email}</td>
        <td>{data.mobile}</td>
     </tr>
) 
 }
    
  </tbody>
</table>
        </div>

    </div>
  )
}
