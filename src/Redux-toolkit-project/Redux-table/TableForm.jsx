import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Name, updatedForm, Withdraw, Deposit, Reset } from './TableSlice/FormSlice'

export const TableForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()

    const formdata= {name, email, mobile} // This is D structure

    const HandleSubmit=(e)=>{
        e.preventDefault();
        setName('');
        setEmail('');
        setMobile('');
        dispatch(updatedForm(formdata))
    }
    const HandleReset=(e)=>{
        e.preventDefault();
        setName('');
        setEmail('');
        setMobile(''); 
        dispatch(Reset()) 
    }

  return (
    <div>

        <div>
        <form className='col-4 p-3' onSubmit={HandleSubmit}>
                  <div className="mb-3">
                      <label for="exampleInputName" className="form-label">Name</label>
                      <input type="text" className="form-control" value={name} id="exampleInputName" onChange={(e)=> setName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" value={email} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)} />
                          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                      <label for="exampleInputMobile" className="form-label">Mobile Number</label>
                      <input type="type" className="form-control" value={mobile} id="exampleInputMobile" onChange={(e)=> setMobile(e.target.value)} />
                  </div>
            
              
                  <button type="submit" className="btn btn-primary me-2">Submit</button>
                  <button type="button" className="btn btn-danger" onClick={HandleReset}>Reset</button>
              </form>
              {/* <div className="mb-3 col-4 pb-3 ps-3">
                      <label for="exampleInputbalance" className="form-label">Balance</label>
                      <input type="type" className="form-control" value={amount} id="exampleInputbalance" onChange={(e)=> setAmount(e.target.value)}/>
                      <button type="submit" className="btn btn-secondary me-3 mt-3" onClick={(e)=>
                       {
                        e.preventDefault();
                        setAmount('');
                        dispatch((Withdraw(amount)))
                       }
                      } >withdraw</button>
                      <button type="submit" className="btn btn-success mt-3" onClick={(e)=>
                       {
                        e.preventDefault();
                        setAmount('');
                        dispatch((Deposit(amount)))
                       }
                       }>Deposite</button>
                  </div> */}
        </div>
    </div>
  )
}
