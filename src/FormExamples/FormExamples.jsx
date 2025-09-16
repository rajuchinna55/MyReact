import React, { useEffect, useState } from 'react'
import { UseState } from '../use-state/UseState' // Ensure this import is correct
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormExamples = () => {
    const [inputForm, setInputForm] = useState('')
    const [btnValue, setBtnValue] = useState('') // Changed UseState to useState
    const notify = () => toast("form submited");

    const Formchange = (e) => {
        setInputForm(e.target.value)
    }

    const ClickBtn = (e) => {
        e.preventDefault() //edi form refresh avvakunda undataniki edi use chestam
        setBtnValue(inputForm)
        notify()
    }
    
    return (
        <div>
            <div>FormExamples</div>
            <h1>Idiot {btnValue}</h1>
            
            <form onSubmit={ClickBtn}>
            <input type="text" onChange={Formchange}  required/>
            <button type='submit'>Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}
