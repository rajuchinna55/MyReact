import React, { useState } from "react";
import HigherOrderComponent from "./HigherOrderComponent";

const HoverOrder = (props) =>{
  console.log(props)
    return(
        <>
        <button onMouseOver={props.handlecount}>Value + {props.count}</button>
        </>
    )
}
export default HigherOrderComponent(HoverOrder);