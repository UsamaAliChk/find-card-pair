import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [classes, setclasses] = useState("image");
  const handelClick = () => {
    setclasses("show");
  };
  return (
    <div className="Card rotate">
      <div className="card-mask" onClick={(e) => handelClick()}></div>
      <img className={classes} src={props.image} alt="Herre" />
    </div>
  );
}
