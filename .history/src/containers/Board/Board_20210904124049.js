import React, { useEffect, useState } from "react";

import {
  getSixPairs,
  getEightPairs,
  getTenPairs,
} from "../../helper/ImagesGetter";

import "./Board.css";

import Card from "../../components/Card/Card";

export default function Board(props) {
  const [images, setimages] = useState([]);

  useEffect(() => {
    setimages(getSixPairs());
  }, []);

  let classes = "Board";
  if ((props.type = "Ten")) {
    classes = "Board Ten";
  }

  let data = images.map((image) => {
    return <Card image={image.image} key={image.key} />;
  });

  return <div className={classes}>{data}</div>;
}
