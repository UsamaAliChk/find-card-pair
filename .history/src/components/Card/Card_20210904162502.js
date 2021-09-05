import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [classes, setclasses] = useState("image");
  const handelClick = () => {
    setclasses("image show");
  };
  return (
    <div className="Card rotate">
      <div className="card-mask"></div>
      <img src={props.image} alt="Herre" />
    </div>
  );
}
