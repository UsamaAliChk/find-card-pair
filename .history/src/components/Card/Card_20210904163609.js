import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="Card">
      <img
        className={props.showImage ? "show" : "image"}
        src={props.image}
        alt="Herre"
      />
    </div>
  );
}
