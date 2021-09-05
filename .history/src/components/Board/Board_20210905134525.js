import React from "react";

import "./Board.css";

import Card from "../Card/Card";

export default function Board(props) {
  const show = true;
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
  }

  let classes = "Board";
  if (props.size === "10 pairs") {
    classes = "Ten";
  }

  return <div className={classes}>{data}</div>;
}
