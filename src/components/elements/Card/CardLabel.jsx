import React from "react";
const CardLabel = (props) => {
    const { name, spec, price } = props;
  return (
    <div className="px-10">
      <h1 className="font-bold my-2 text-2xl">{name}</h1>
      <p className="text-slate-500 mb-2">
        {spec}
      </p>
      <h1 className="font-bold text-2xl">{price}</h1>
    </div>
  );
};

export default CardLabel;