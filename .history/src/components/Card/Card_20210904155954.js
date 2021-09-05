import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card rotate">
      <div className="card-mask"></div>
      <img src={props.image} alt="Herre" />
    </div>
  );
}
