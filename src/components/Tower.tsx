import React from "react";
import styled from "styled-components";
import "./Tower.css";
import Block from "./Block";
import { TowerT } from "../Types";

type Props = {
  tower: TowerT;
  color: string;
  onClick: () => void;
  selected: boolean;
};

const Wrapper = styled.div`
  position: relative;
`;

const Select = styled.div`
  height: 1rem;
  width: 100%;
  position: absolute;
  bottom: -2rem;
  background-color: lightblue;
`;

const Tower = ({ tower, onClick, selected, color }: Props) => {
  return (
    <Wrapper
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='rod'
    >
      {tower.map(disk => (
        <Block key={disk} size={disk}></Block>
      ))}
      {selected && <Select />}
    </Wrapper>
  );
};

export default Tower;
