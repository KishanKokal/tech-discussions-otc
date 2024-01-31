import React from "react";
import { Cards } from "./Cards";

export const MeetList = () => {
  const ApiData = [
    {
      title: "OTC Catchup #5",
      desciption:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      id: 123,
    },
    {
      title: "OTC Catchup #6",
      desciption:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      id: 123,
    },
    {
      title: "OTC Catchup #7",
      desciption:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      id: 123,
    },
  ];
  return (
    <div className="meet-list bg-cyan-500 h-screen">
      <h2 className="text-4xl font-bold text-white w-1/2 mx-auto text-center p-6">Meet List</h2>
      <div className="flex justify-around">
        <Cards data={ApiData[0]} />
        <Cards data={ApiData[1]} />
        <Cards data={ApiData[2]} />
      </div>
    </div>
  );
};
