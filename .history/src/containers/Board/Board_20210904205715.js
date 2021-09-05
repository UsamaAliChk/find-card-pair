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

  const handelClick = (index, id) => {
    let prevImages = images;
    let filteredImages = prevImages.filter((image) => image.id !== id);
    let selectedImage = prevImages.filter((image) => image.id === id);
    selectedImage[0].show = true;
    let newImages = [];

    for (let i = 0; i < images.length; i++) {
      if (i === index) {
        newImages.push(selectedImage);
      } else {
        newImages.push(prevImages[i]);
      }
    }

    console.log(newImages);
    // filteredImages.push(selectedImage[0]);
    // setimages(filteredImages);
  };

  let data = images.map((image, i) => {
    return (
      <Card
        image={image.image}
        key={image.id}
        show={image.show}
        clicked={(e) => handelClick(i, image.id)}
      />
    );
  });

  return <div className={classes}>{data}</div>;
}
