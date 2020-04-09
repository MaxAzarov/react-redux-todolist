import React from "react";
import "./TodoItemDetails.css";
export default function ShowDetails(props) {
  console.log(props.details[0]);
  let info;
  if (props.details) {
    info = props.details.map((item) => (
      <div className="details">
        <p>Name:{item.name}</p>
        <p>Description:{item.description}</p>
      </div>
    ));
  }
  return <div>{info}</div>;
}
