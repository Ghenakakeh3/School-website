import React from 'react';
import "./ZigZag.css"


const ZigZag = ({ children, bottom, top }) => {
  return (
    <div className="relative ">


      {top ? (<div className={` ${top ? "zig-zag-top" : ""}`}> {children}</div>) : " "}

      {bottom ? (<div className={` ${bottom ? "zig-zag-bottom" : ""}`}> {children}</div>) : ""}
    </div>
  );
};

export default ZigZag;
