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
  mouseCrds: {
    x: number;
    y: number;
  };
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

const Tower = ({ tower, onClick, selected, color, mouseCrds }: Props) => {
  const { x, y } = mouseCrds;

  const followMouseBlockStyle: React.CSSProperties = {
    display: "block",
    position: "fixed",
    top: y + 10,
    left: x,
    zIndex: 2,
  };

  return (
    <Wrapper
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='rod'
    >
      {tower.map((disk, i) => (
        <div key={disk} style={selected && !i ? followMouseBlockStyle : {}}>
          <Block size={disk}></Block>
        </div>
      ))}
      {selected && <Select />}
    </Wrapper>
  );
};

export default Tower;
