import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const MangodpDataForm = () => {
  const [name, setName] = useState("")
  const [number, setNumber] = useState("")
  const [email, setemail] = useState("")

  const formData = {name,number, email}

  const handleSubmit= async(e) =>{
   
    e.preventDefault()
   console.log(formData)
   try{
    const response = await fetch("https://url", {
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
     })
     alert("done")
   }catch(error){
    alert("error re try")
   }
   
  }

  return (
    <div>
      <div>MangodpDataForm</div>
      <form onSubmit={handleSubmit}>
        <dl>
          <dt>Name:</dt>
          <dd><input type="text" name='name' required onChange={(e)=>{setName(e.target.value)}} /></dd>
          <dt>Number:</dt>
          <dd><input type="tel" name='tel' required onChange={(e)=>{setNumber(e.target.value)}} /></dd>
          <dt>Email:</dt>
          <dd><input type="email" name='email' required onChange={(e)=>{setemail(e.target.value)}} /></dd>
        </dl>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
