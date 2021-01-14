// import React from "react";
import styled from "styled-components";

const Block = styled.div<{ size: number }>`
  width: ${props => props.size}rem;
  height: 1rem;
  border: 1px solid black;
  z-index: 1;
`;

//const Block = () => {
//  return <Ablock size={5}>aaa</Ablock>;
//};

export default Block;
