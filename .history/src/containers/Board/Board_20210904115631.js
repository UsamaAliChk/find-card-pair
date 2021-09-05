import React, { useEffect, useState } from "react";

import { getSixPairs } from "../../helper/ImagesGetter";

import Card from "../../components/Card/Card";

export default function Board() {
  const [images, setimages] = useState([]);
  useEffect(() => {
    setimages(getSixPairs());
  }, []);

  let data = images.map((image) => {
    return <Card image={image} key={image.key} />;
  });

  return <div>{data}</div>;
}
