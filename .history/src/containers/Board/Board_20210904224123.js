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
  const [selectedImages, setselectedImages] = useState([]);

  useEffect(() => {
    if (props.size === "6 pairs") setimages(getSixPairs());
    else if (props.size === "8 pairs") setimages(getEightPairs());
    else if (props.size === "10 pairs") setimages(getTenPairs());
  }, [props]);

  const compareImages = (newImages, checkers) => {
    let completed = [];
    if (checkers[0].type === checkers[1].type) {
      for (let i = 0; i < newImages.length; i++) {
        if (newImages[i].type === checkers[0].type) {
          newImages[i].complete = true;
        }
        props.setscore(props.score + 1);
        completed.push(newImages[i]);
      }
    } else {
      for (let i = 0; i < newImages.length; i++) {
        if (
          newImages[i].id === checkers[0].id ||
          newImages[i].id === checkers[1].id
        ) {
          newImages[i].show = false;
        }
        completed.push(newImages[i]);
      }
    }
    setselectedImages([]);
  };

  const handelClick = (index, id) => {
    if (selectedImages.length === 2) return;
    let prevImages = images;
    let clickedImage = prevImages.filter((image) => image.id === id);
    let checkers = [...selectedImages, clickedImage[0]];

    setselectedImages(checkers);

    clickedImage[0].show = true;
    let newImages = [];
    for (let i = 0; i < images.length; i++) {
      if (i === index) {
        newImages.push(clickedImage[0]);
      } else {
        newImages.push(prevImages[i]);
      }
    }

    setimages(newImages);

    if (checkers.length === 2) {
      setTimeout(() => {
        compareImages(newImages, checkers);
      }, 500);
    }
  };

  let data = images.map((image, i) => {
    return (
      <Card
        image={image.image}
        key={image.id}
        show={image.show}
        complete={image.complete}
        clicked={(e) => handelClick(i, image.id)}
      />
    );
  });

  let classes = "Board";
  if (props.size === "10 pairs") {
    classes = "Ten";
  }

  return <div className={classes}>{data}</div>;
}
