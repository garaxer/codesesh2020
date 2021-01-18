import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import "./Tower.css";
import Block from "./Block";
import { Towers } from "../Types";
import { moveCheck, moveBlock } from "../hanoi";

type Props = {
  towers: Towers;
  key: string;
  akey: string;
  onClick: () => void;
  selected: string;
  setTowers: Dispatch<SetStateAction<Towers>>;
  setSelected: Dispatch<SetStateAction<string>>;
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

const Tower = ({
  towers,
  akey,
  key,
  onClick,
  selected,
  setSelected,
  setTowers,
}: Props) => {
  const [color, setColor] = useState<string>("");
  const [firstSelection, setfirstSelection] = useState<string>("");

  const tower = towers[akey];

  useEffect(() => {
    setfirstSelection("");
    setColor("");

    if (selected && !color) {
      setfirstSelection(selected);
      setColor("red");
      tower.length
        ? towers[selected][0] < tower[0] && setColor("green")
        : setColor("green");
    } else if (selected) {
      if (selected === akey) {
        color.includes("green") &&
          setTowers(moveBlock(firstSelection, selected)(towers));
      }
      setSelected("");
    }
  }, [selected, towers]);

  return (
    <Wrapper
      key={key}
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='rod'
    >
      {towers[akey].map(disk => (
        <Block size={disk}></Block>
      ))}
      {selected === akey && <Select />}
    </Wrapper>
  );
};

export default Tower;
