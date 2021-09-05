import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [showImage, setshowImage] = useState(false);
  return (
    <div className="Card rotate">
      <div
        className="card-mask"
        onClick={(e) => {
          showImage(!showImage);
          console.log("Clicked");
        }}
      ></div>
      <img
        className={showImage ? "show" : "image"}
        src={props.image}
        alt="Herre"
      />
    </div>
  );
}
