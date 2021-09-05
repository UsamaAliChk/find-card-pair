import React from "react";
import "./Card.css";

import image from "../../asests/images/pair-1.jpg";

export default function Card(props) {
  return (
    <div className="Card">
      <img src={image} />
    </div>
  );
}
