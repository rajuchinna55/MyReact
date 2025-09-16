import React, { useEffect, useState } from "react";

 const HigherOrderComponent = (CountName) =>{
    const CounterCompo = () =>{

        const [count, setCount]= useState(0);

        const handlecount = ()=>{
            setCount(count + 1)
        }
        

     return <CountName count={count} handlecount={handlecount} />

    }

    return CounterCompo;
}
export default HigherOrderComponent;