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

  useEffect(() => {
    // Want to be able to unselect if clicking the same block.
    // Dont do anything if you have clicked red.
    // move it if you have something selected and the next selection is green

    // If there is colour we are in phase 2
    //TODO: checking if we are in phase two by checking if the blocks are coloured in is weird and the game phase should be stored in App

    console.log("effect");
    console.log(selected);

    if (selected && !color) {
      // Something has been selected and we are in game phase 1
      setfirstSelection(selected);
      moveCheck(selected, akey, towers) ? setColor("green") : setColor("red");
    } else if (selected && color) {
      // Something else has been selected and we are in game phase 2

      // TODO: Change these to a switch statement, maybe useReducer
      //only perform the action if we are working on displaying the selected tower (TODO: Move this logic else where)
      if (selected === akey) {
        switch (color) {
          case "green":
            setSelected("");
            setTowers(moveBlock(firstSelection, selected)(towers));
            break;
          case "red":
            setSelected(firstSelection);
            break;
          default:
            break;
        }
      }
      // is the NEW selection green? move the block
    } else {
      // No selection, reset
      setSelected("");
      setfirstSelection("");
      setColor("");
    }
  }, [akey, color, firstSelection, selected, setSelected, setTowers, towers]);

  return (
    <Wrapper
      key={key}
      onClick={onClick}
      style={{ backgroundColor: color }}
      className='rod'
    >
      {towers[akey].map(disk => (
        <Block key={disk} size={disk}></Block>
      ))}
      {selected && akey === firstSelection && <Select />}
    </Wrapper>
  );
};

export default Tower;
