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
    if (props.size === "6") setimages(getSixPairs());
    else if(props.size === "8");
    setimages(getEightPairs());
    else if(props.size === "10");
    setimages(getTenPairs());
  }, []);

  let classes = "Board";
  if (props.size === "10") {
    classes = "Board Ten";
  }

  let data = images.map((image) => {
    return <Card image={image.image} key={image.key} />;
  });

  return <div className={classes}>{data}</div>;
}
