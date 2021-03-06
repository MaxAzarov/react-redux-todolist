import React from "react";
import "./TodoItemDetails.css";
export default function ShowDetails(props) {
  let info;
  if (props.details) {
    info = props.details.map((item, i) => (
      <div className="details" key={i}>
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
      </div>
    ));
  }
  return <div>{info}</div>;
}
