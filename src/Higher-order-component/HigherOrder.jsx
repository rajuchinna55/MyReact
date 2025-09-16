import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const HigherOrder = (props) =>{
    console.log(props)
    return(
        <>
        <div>
            <button onClick={props.handlecount}>{`value + ${props.count}`}</button>
        </div>
        </>
    )
}
export default HigherOrderComponent(HigherOrder)