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
    console.log(props.size, "Usama");
    if (props.size === "6 pairs") setimages(getSixPairs());
    else if (props.size === "8 pairs") setimages(getEightPairs());
    else if (props.size === "10 pairs") setimages(getTenPairs());
  }, [props]);

  let s = getTenPairs();

  console.log(s);

  let classes = "Board";
  if (props.size === "10 pairs") {
    classes = "Ten";
  }

  let data = images.map((image) => {
    return <Card image={image.image} key={image.key} />;
  });

  return (
    <div className={classes}>
      <Card image={s[0].image} key={1} />
    </div>
  );
}
