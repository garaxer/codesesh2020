import React from "react";
import "./Tower.css";

const Tower = ({
  children,
  colour,
}: {
  children?: React.ReactNode;
  colour?: string;
}) => {
  return (
    <div style={{ backgroundColor: colour ? colour : "" }} className='rod'>
      {children}
    </div>
  );
};

export default Tower;
