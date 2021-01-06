import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Block from "./components/Block";
import Tower from "./components/Tower";

import { compose, moveBlock } from "./hanoi";

type towersType = {
  [key: number]: number[];
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

  const towerClick = (index: number) => {
    console.log(index);
  };
  return (
    <Container>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        {Object.keys(towers).map(index => (
          <div onClick={() => towerClick(parseInt(index))}>
            <Tower colour='blue'>
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
