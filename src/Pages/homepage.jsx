import React from "react";
import { Link } from "react-router-dom";
const WelcomePage = (prpos) => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center bg-zinc-800 flex-col">
        <h1 className="text-9xl font-bold text-white text-center">
          Welcome To <br />
          My App
        </h1>
      </div>
      <div className="w-96 flex flex-col border-2 rounded-2xl shadow-xl  h-fit  justify-center items-center py-20   border-slate-300 ">
        <Link>
          <img
            src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg"
            alt=""
          />
          <Link className="px-10">
            <h1 className="font-bold mb-2 ">Gadget</h1>
            <p className="text-slate-500 mb-2">Spesification</p>
            <h1 className="font-bold">Price</h1>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
