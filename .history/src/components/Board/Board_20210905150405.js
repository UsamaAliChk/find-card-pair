import React, { useState, useEffect } from "react";

import "./Board.css";

import Card from "../Card/Card";

export default function Board(props) {
  const [show, setshow] = useState(null);

  useEffect(() => {
    setshow(true);
    setTimeout(() => {
      setshow(false);
    }, 3000);
  }, [props.size]);

  let CARDS = null;
  if (!show) {
    CARDS = props.images.map((image, i) => {
      return (
        <Card
          image={image.image}
          key={image.id}
          show={image.show}
          complete={image.complete}
          clicked={(e) => props.handelClick(i, image.id)}
        />
      );
    });
  } else {
    CARDS = props.images.map((image, i) => {
      return <Card image={image.image} key={image.id} show={true} />;
    });
  }

  let classes = "Board";
  if (props.size === "10 pairs") {
    classes = "Ten";
  }

  return <div className={classes}>{CARDS}</div>;
}
