import React, { useEffect, useState } from 'react'
const UserAPI= "https://jsonplaceholder.typicode.com/posts"

console.log(`this is link `,UserAPI)

export const DataApi = () => {
    const [user, setUser]=useState([])

    const userHandler =async()=> {
        const response =await fetch(UserAPI)
        const NewData = await response.json()
        setUser(NewData)
    }
    useEffect(()=>{
        console.log(userHandler())
    },[])
  

  return (
    <div>
        <div>DataApi</div>
     <ul>
        {
            user.map((item)=>
                <>
                <li key={item}><span>{item.id}</span></li>
                <li key={item}><h1>{item.title}</h1></li>
                <li key={item}><p>{item.body}</p></li>
                </>
            )
        }
        </ul>
      
    </div>
  )
}
