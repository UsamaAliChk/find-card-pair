import React, { useEffect, useState } from "react";

import { getSixPairs } from "../../helper/ImagesGetter";

import Card from "../../components/Card/Card";

export default function Board() {
  const [images, setimages] = useState([]);
  useEffect(() => {
    setimages(getSixPairs());
  }, []);

  console.log(getSixPairs());

  let data = images.map((image) => {
    return <Card image={image} key={image.key} />;
  });

  return (
    <div>
      <Card image={images[0].image} />
    </div>
  );
}
