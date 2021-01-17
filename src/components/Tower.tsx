import React from "react";
import styled from "styled-components";
import "./Tower.css";
import Block from "./Block";
import { TowerT } from "../Types";

type Props = {
  tower: TowerT;
  color?: string;
  onClick: () => void;
  selected: Boolean;
}

const Wrapper = styled.div`
  position: relative;
`;

const Select = styled.div`
  height: 1rem;
  width: 100%;
  position: absolute;
  bottom: -1rem;
  background-color: lightblue;
`;

const Tower = ({
  tower,
  color,
  onClick,
  selected
}: Props) => {
  return (
    <Wrapper onClick={onClick} style={{ backgroundColor: color ? color : "" }} className='rod'>
      {tower.disks.map(disk => (
        <Block size={disk}></Block>
      ))}
      { selected && <Select />}
    </Wrapper>
  );
};

export default Tower;
