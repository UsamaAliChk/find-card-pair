import React, { useState, useEffect } from "react";
import Board from "../../components/Board/Board";
import UserInput from "../../components/UserInput/UserInput";

import {
  getSixPairs,
  getEightPairs,
  getTenPairs,
} from "../../helper/ImagesGetter";
import "./Game.css";

export default function Game() {
  const [size, setsize] = useState("6 pairs");
  const [score, setscore] = useState(0);
  const [tries, settries] = useState(0);

  const [guessed, setguessed] = useState([]);

  const [images, setimages] = useState([]);
  const [selectedImages, setselectedImages] = useState([]);

  useEffect(() => {
    if (size === "6 pairs") setimages(getSixPairs());
    else if (size === "8 pairs") setimages(getEightPairs());
    else if (size === "10 pairs") setimages(getTenPairs());
  }, [size]);

  const compareImages = (newImages, checkers) => {
    settries(tries + 1);
    let completed = [];
    if (checkers[0].type === checkers[1].type) {
      for (let i = 0; i < newImages.length; i++) {
        if (newImages[i].type === checkers[0].type) {
          newImages[i].complete = true;
        }

        completed.push(newImages[i]);
      }
      setguessed([...guessed, checkers[0].type]);
      setscore(score + 1);
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

  const shuffleArray = () => {
    let oldArray = [...images];
    for (let i = oldArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i + 1);
      [oldArray[i], oldArray[j]] = [oldArray[j], oldArray[i]];
    }
    setimages(oldArray);
  };

  const handelClick = (index, id) => {
    if (selectedImages.length === 2) return;

    let prevImages = images;
    let clickedImage = prevImages.filter((image) => image.id === id);
    let checkers = [...selectedImages, clickedImage[0]];
    if (guessed.indexOf(clickedImage[0].type) === 1) {
      return;
    }
    console.log("Hello");
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

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Find the Pairs</h2>
      <div className="Game">
        <div>
          <Board
            images={images}
            handelClick={handelClick}
            size={size}
            score={score}
            setscore={setscore}
            settries={settries}
            tries={tries}
          />
        </div>
        <div style={{ marginLeft: "50px" }}>
          <UserInput
            clicked={(e) => shuffleArray()}
            setsize={setsize}
            score={score}
            tries={tries}
            size={size}
          />
        </div>
      </div>
    </div>
  );
}
