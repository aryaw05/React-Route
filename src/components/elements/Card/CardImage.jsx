/* eslint-disable react/prop-types */
import React from "react";

const CardImage = (props) => {
  const { src, alt } = props;
  return (
      <img
        className="m-auto"
        src={src}
        alt={alt}
      />
  );
};

export default CardImage;
