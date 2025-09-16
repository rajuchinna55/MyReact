import React, { useState } from 'react'

export const OnClick = () => {
    const [increment, setDecrement] =useState(0)

    const Increment = () => {
     setDecrement(increment + 1)
    }
    const Decrement = () => {

        // if - value ni avoide cheyataniki

     if(increment > 0){
        setDecrement(increment - 1) 
     }
    }
    const Reset=()=>{
        setDecrement(0)
    }

    const handleClick = (id) => {
        alert(`Button ${id} clicked!`);
      };

      const [isToggled, setIsToggled] = useState(false);

      const handleClickgk = () => {
        setIsToggled(!isToggled);
      };
    
  return (
    <div>
       <h1 style={{color: 'red'}}> {increment}</h1>
       <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
       </div>
       <div>
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
    </div>
    <div>
      <button onClick={handleClickgk}>
        {isToggled ? 'Hide' : 'Show'} Message
      </button>
     <div style={{display: 'flex'}}>
     hghghghghghghgh.....{isToggled && <p>This is a toggled message!</p>}
     </div>
    </div>
    </div>
  )
}
