import image1 from "../asests/images/pair-1.jpg";
import image2 from "../asests/images/pair-2.jpg";
import image3 from "../asests/images/pair-3.jpg";
import image4 from "../asests/images/pair-4.jpg";
import image5 from "../asests/images/pair-5.jpg";
import image6 from "../asests/images/pair-6.jpg";
import image7 from "../asests/images/pair-7.jpg";
import image8 from "../asests/images/pair-8.jpg";
import image9 from "../asests/images/pair-9.jpg";
import image10 from "../asests/images/pair-10.jpg";
import image11 from "../asests/images/pair-11.jpg";
import image12 from "../asests/images/pair-12.jpg";
import image13 from "../asests/images/pair-13.jpg";
import image14 from "../asests/images/pair-14.jpg";
import image15 from "../asests/images/pair-15.jpg";
import image16 from "../asests/images/pair-16.jpg";
import image17 from "../asests/images/pair-17.jpg";
import image18 from "../asests/images/pair-18.jpg";
import image19 from "../asests/images/pair-19.jpg";
import image20 from "../asests/images/pair-20.jpg";

import { v4 } from "uuid";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
];

export const getSixPairs = () => {
  let pairs,
    pairs2 = [];
  for (let i = 0; i < 6; i++) {
    pairs[i] = { id: v4(), image: images[i], type: i, show: false };
  }
  for (let i = 0; i < 6; i++) {
    pairs2[i] = { id: v4(), image: images[i], type: i, show: false };
  }
  pairs = pairs.concat(pairs2);
  return pairs;
};

export const getEightPairs = () => {
  let pairs,
    pairs2 = [];
  for (let i = 0; i < 8; i++) {
    pairs[i] = { id: v4(), image: images[i], type: i, show: false };
  }
  for (let i = 0; i < 8; i++) {
    pairs2[i] = { id: v4(), image: images[i], type: i, show: false };
  }
  pairs = pairs.concat(pairs2);
  return pairs;
};

export const getTenPairs = () => {
  let pairs = [];
  for (let i = 0; i < 10; i++) {
    pairs[i] = { id: v4(), image: images[i] };
  }
  pairs = pairs.concat(pairs);
  return pairs;
};
