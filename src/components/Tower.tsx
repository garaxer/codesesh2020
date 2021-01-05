import React from "react";
import "./Tower.css";

const Tower = ({ children }: { children?: React.ReactNode } ) => {
  return <div className='rod'> {children} </div>;
};

export default Tower;
