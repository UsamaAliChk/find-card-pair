import React, { useEffect, useState } from "react";

import { getSixPairs } from "../../helper/ImagesGetter";

export default function Board() {
  const [images, setimages] = useState([]);
  useEffect(() => {
    setimages(getSixPairs());
  }, []);

  let data = images.map((image) => {});

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
