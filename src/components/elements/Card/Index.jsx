/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import CardImage from "./CardImage";
import CardLabel from "./CardLabel";
const CardContainer = (props) => {
  const { src, alt, text, spec, price } = props;
  return (
    <Link className="w-96 flex flex-col border-2 rounded-2xl shadow-xl  h-fit  py-10 border-slate-300 first-letter mx-5 hover:scale-110 duration-100 bg-white my-5">
      <CardImage src={src} alt={alt} />
      <CardLabel name={text} spec={spec} price={price} />
    </Link>
  );
};

export default CardContainer;