import image1 from '../asests/images/pair-1.jpeg';
import image2 from "../asests/images/pair-2.jpeg";
import image3 from "../asests/images/pair-3.jpeg";
import image4 from "../asests/images/pair-4.jpeg";
import image5 from "../asests/images/pair-5.jpeg";
import image6 from "../asests/images/pair-6.jpeg";
import image7 from "../asests/images/pair-7.jpeg";
import image8 from "../asests/images/pair-8.jpeg";
import image9 from "../asests/images/pair-9.jpeg";
import image10 from "../asests/images/pair-10.jpeg";
import image11 from "../asests/images/pair-11.jpeg";
import image12 from "../asests/images/pair-12.jpeg";
import image13 from "../asests/images/pair-13.jpeg";
import image14 from "../asests/images/pair-14.jpeg";
import image15 from "../asests/images/pair-15.jpeg";
import image16 from "../asests/images/pair-16.jpeg";
import image17 from "../asests/images/pair-17.jpeg";
import image18 from "../asests/images/pair-18.jpeg";
import image19 from "../asests/images/pair-19.jpeg";
import image20 from "../asests/images/pair-20.jpeg";


import {uuid as v4} from 'uuid'

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


export const getSixPairs=()=>{
    let pairs=[];
    for(let i=0;i<3;i++){
        pairs[i]={id:v4(),image=images[i]}
    }
    pairs=pairs.concat(pairs);
    return pairs
}

export const getEightPairs=()=>{
    let pairs=[];
    for(let i=0;i<4;i++){
        pairs[i]={id:v4(),image=images[i]}
    }
    pairs=pairs.concat(pairs);
    return pairs
}

export const getTenPairs=()=>{
    let pairs=[];
    for(let i=0;i<10;i++){
        pairs[i]={id:v4(),image=images[i]}
    }
    pairs=pairs.concat(pairs);
}

