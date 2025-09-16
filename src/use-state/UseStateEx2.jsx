import React, { useState } from 'react'

export const UseStateEx2 = () => { 
    const [show, setShow] = useState(false)

    const HandleShow=()=>{
        setShow(!show)
    }
    const styling ={
         marginTop: "10px",
         textAlign: "-webkit-center"
    }
  return (
    <div style={styling}>Toggle affect Hide/Show
        <div className='Hide-SHow-Btn border' style={{width:"500px"}}> 
            <h1 className='border' style={{marginBottom:"0", cursor:"pointer"}} onClick={HandleShow}>Click this button</h1>
           {show &&
            <div className='border'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum sequi, praesentium exercitationem reprehenderit ut ullam amet omnis est quisquam nihil dolorem fugiat, modi quasi, neque dicta vitae nisi similique. Numquam, eligendi minus officia dolor quibusdam commodi iusto! Distinctio vitae ipsam, temporibus quam eius impedit, quibusdam tenetur amet enim, eaque blanditiis.</p>
        </div>
           }
        </div>
    </div>
  )
}
