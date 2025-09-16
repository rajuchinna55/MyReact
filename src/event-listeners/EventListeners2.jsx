import React, { useEffect, useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);
  const [bgclr, setBgclr] = useState("red")
  const n =
   {
     a:"aa",
   b:"bb"
   }
  

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const updateReSize =()=>{
    setBgclr("green")
  }

  useEffect(()=>{
    const button = document.querySelector('.ck');
    if(button){
      button.addEventListener('mouseover', (el)=>{
        el.stopPropagation()
        // el.stopPropagation()(this atribute 2 buttons unte oa button ni click cheste inko button ki action jaragakunda undataniki use chestamu)
        button.style.backgroundColor="blue"
      }) 
      button.addEventListener('mouseout', (el)=>{
        el.stopPropagation()
        button.style.backgroundColor="black"
      }) 
      }
  },[])

useEffect(()=>{
 window.addEventListener('click', updateReSize);
}, [])
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me
      </label>
      <p>{isChecked ? 'Checked' : 'Unchecked'}</p>

      <div>
         <button  style={{backgroundColor: bgclr}}>click</button> <br />
         <button className='ck'>click</button>
         {/* <p>{n.a}</p> */}
      </div>
    </div>
  );
}

export default CheckboxExample;
