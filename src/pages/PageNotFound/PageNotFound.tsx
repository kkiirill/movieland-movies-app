import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound: React.FC = () => {
  return (
    <div className="top-0 fixed left-0 h-screen w-screen z-[1000]">
      <img
        src={require("../../images/bg-lost.jpg")}
        className="absolute w-full h-full object-cover z-[1001]"
        alt=""
      />
      <div className="fixed top-0 w-full h-full left-0  bg-black/60 opacity-1 z-[1002]"></div>

      <div className="flex flex-col justify-center items-center text-white w-full h-screen z-[1005]">
        <span className="text-bold">Oooppss</span>
        <h1 className="text-6xl z-[1005]">
          I see you are <b>lost</b> my friend?
        </h1>
        <p className="py-3 z-[1005]">follow me i'll get you out of here</p>
        <Link to="/" className="hover:scale-150 z-[1005] cursor-pointer">
          <img
            src={require("../../images/hero.png")}
            className="block w-20 h-20 "
            alt=""
            title="click me"
          />
        </Link>
      </div>
    </div>
  );
};
