import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card rotate">
      <img src={props.image} alt="Herre" />
    </div>
  );
}
