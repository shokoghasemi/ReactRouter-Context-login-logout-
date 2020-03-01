import React from "react";
import './Button.css'

export default function Button(props) {
  return (<button className="Button" onClick={props.OnClick}>{props.discription}</button>)
  
}
