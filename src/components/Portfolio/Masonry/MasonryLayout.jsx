import React, { useEffect } from "react";
import "./Masonry.scss";

import Masonry from "react-masonry-css";
import Pin from "./Pin/Pin";

const breakpointObj = {
  default: 4,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const MasonryLayout = ({ items }) => {
  return (
    <Masonry className="app__masonry" breakpointCols={breakpointObj}>
      {items?.map((pin) => (
        <Pin key={pin._id} pin={pin} className="app__masonry-pin"/>
      ))}
    </Masonry>
  );
};

export default MasonryLayout;
