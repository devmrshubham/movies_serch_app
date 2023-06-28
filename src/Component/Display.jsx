import { computeHeadingLevel } from "@testing-library/react";
import React from "react";

function Display({ data }) {
  if (data.length > 0) {
  } else {
  }
  return (
    <div className=" max-w-[1200px] grid grid-cols-4 gap-x-14 gap-y-4 mx-auto mt-10  ">
      {data.length > 0
        ? data.map((d) => {
            return <Card key={d.id} ditals={d} />;
          })
        : "lodinig data"}
    </div>
  );
}

function Card({ ditals }) {
  const IMAGEPATH = "https://image.tmdb.org/t/p/w1280/";
  return (
    <div className=" group w-[300px] min-h-[500px] shadow-2xl relative overflow-hidden  ">
      <img
        src={IMAGEPATH + ditals.poster_path}
        className="w-[100%] h-[100%] "
      />
      <div className="w-[100%] h-[50%]  absolute bg-[#ffffff75] top-[100%] group-hover:top-[50%] duration-500 ">
        <div className=" text-2xl font-bold "> {ditals.title} </div>
        <p>{ditals.overview} </p>
      </div>
    </div>
  );
}

export default Display;
