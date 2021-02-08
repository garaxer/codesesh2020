// import React from "react";
import styled from "styled-components";
import colours from "../lib/colours";

const Block = styled.div<{ size: number }>`
  width: ${props => props.size}rem;
  height: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 1;
  background-color: ${({ size }) => colours[size.toString()]};
`;

//const Block = () => {
//  return <Ablock size={5}>aaa</Ablock>;
//};

export default Block;
