import React from "react";
import { DotLoader } from "react-spinners";


const Loading = ({ size }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-[50vh]">
        <DotLoader color="#ff6d00" size={size} />
      </div>{" "}
    </div>
  );
};

export default Loading;
