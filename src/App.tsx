import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Block from "./components/Block";
import Tower from "./components/Tower";

import { compose, moveBlock } from "./hanoi";

type towersType = {
  [key: number]: number[];
};

type towersColour = {
  [key: number]: string;
};

const Container = styled.div`
  position: absolute;
  width: 100vw;
`;

const Title = styled.div`
  font-size: 10rem;
  text-align: center;
  color: Gray;
`;

const TowersWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Buttono = styled.div`
  position: absolute;
  bottom: -2rem;
`;

function App() {
  const [towers, setTowers] = useState<towersType>({
    1: [1, 2, 3, 4, 5, 6],
    2: [],
    3: [],
  });

  const [colours, setColours] = useState<towersColour>({
    1: "",
    2: "",
    3: "",
  });

  const towerColour = (index: number) => {
    // TODO: if the tower is empty blink or something
    console.log(index);
    console.log({ ...colours, [index]: "lightblue" });
    const c = Object.keys(towers).reduce((a, c) => {
      const t = towers[parseInt(c)]; // this tower
      const newBlockColour =
        !t.length || t[0] < towers[index][0] ? "green" : "red";
      return { ...a, [c]: newBlockColour };
    }, {});

    setColours({ ...c, [index]: "lightblue" });
    //filter the towers to get rid of the selected, map overthem and get a final colour needed depending on some formula that checks if its possible to mvoe the block
  };

  const moveBlockToAnotherTower = (index: number) => {
    //
  };

  return (
    <Container>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        {Object.keys(towers).map(index => (
          <div
            onClick={() =>
              colours[parseInt(index)]
                ? moveBlockToAnotherTower(parseInt(index))
                : towerColour(parseInt(index))
            }
          >
            <Tower colour={colours[parseInt(index)]}>
              {towers[parseInt(index)].map(i => (
                <Block size={i}></Block>
              ))}
            </Tower>
          </div>
        ))}
      </TowersWrapper>
    </Container>
  );
}

export default App;
