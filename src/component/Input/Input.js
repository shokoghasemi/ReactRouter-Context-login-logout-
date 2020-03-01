import React from "react";
import './Input.css'
export default function Input(props) {
  return (
    <input
      title={props.Title}
      type={props.Type}
      name={props.Name}
      onChange={props.OnChange}
    ></input>
  );
}
