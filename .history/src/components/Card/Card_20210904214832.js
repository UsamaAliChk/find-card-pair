import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card" onClick={props.clicked}>
      <img
        className={
          (props.show ? "show" : "image", props.complete ? "done" : "image")
        }
        src={props.image}
        alt="Herre"
      />
    </div>
  );
}
