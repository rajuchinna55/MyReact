import React, { useEffect, useState } from 'react'


export const DataApi2 = () => {
    const [userData2, setUserData2]= useState([])

    const HandlerData = async() =>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        const NewData = await response.json()
        setUserData2(NewData)
    }
   useEffect(()=>{
    console.log(HandlerData())
   },[])
  return (
    <div>
        <div>DataApi2</div>
          {
            userData2.map((item)=>
                <ol key={item}>
                    <li style={{fontWeight: '600'}}>{item.id}</li>
                    <li>{item.name}</li>
                    <li>Email: <span style={{fontWeight: '600'}}>{item.email}</span></li>
                </ol>
            )
          }
    </div>
  )
}
