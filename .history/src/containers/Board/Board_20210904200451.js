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
    if (props.size === "6 pairs") setimages(getSixPairs());
    else if (props.size === "8 pairs") setimages(getEightPairs());
    else if (props.size === "10 pairs") setimages(getTenPairs());
  }, [props]);

  let classes = "Board";
  if (props.size === "10 pairs") {
    classes = "Ten";
  }

  const handelClick = (id) => {
    let prevImages = images;
    let filteredImages = prevImages.filter((image) => image.id !== id);
    let selectedImage = prevImages.filter((image) => image.id === id);

    console.log(newimage);
  };

  let data = images.map((image) => {
    return (
      <Card
        image={image.image}
        key={image.key}
        show={image.show}
        clicked={(e) => handelClick(image.id)}
      />
    );
  });

  return <div className={classes}>{data}</div>;
}
