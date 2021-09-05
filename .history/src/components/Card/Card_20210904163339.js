import React, { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [showImage, setshowImage] = useState(false);
  return (
    <div className="Card" onClick={(e) => setshowImage(!showImage)}>
      <img
        className={showImage ? "show" : "image"}
        src={props.image}
        alt="Herre"
      />
    </div>
  );
}
