import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Tower from "./components/Tower";

import { Towers, TowerT } from "./Types";
import { moveCheck, moveBlock } from "./hanoi";

const Container = styled.div`
  position: absolute;
  width: 100vw;
`;

const Title = styled.div`
  font-size: 7rem;
  text-align: center;
  color: Gray;
  margin-bottom: 2rem;
`;

const TowersWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const TOWER_LENGTH = 2;

function App() {
  const [towers, setTowers] = useState<Towers>({
    1: Array.from({ length: TOWER_LENGTH }, (_, i) => i + 1),
    2: [],
    3: [],
  });

  const [selected, setSelected] = useState<string>("");

  const isComplete = !towers[1].length && !towers[2].length;

  const handlePhaseOne = (k: string, v: TowerT) => {
    selected === k ? setSelected("") : (v.length || selected) && setSelected(k);
  };

  const handlePhaseTwo = (k: String) => {
    moveCheck(selected, k, towers) && setTowers(moveBlock(selected, k)(towers));
    setSelected("");
  };

  useEffect(() => {
    console.log("selection changed");
  }, [selected]);

  return (
    <Container>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        {Object.entries(towers).map(([k, v]) => (
          <Tower
            tower={towers[k]}
            color={
              // If you dont want to use movecheck again in phase two, you can add the colours to the towers state object but then you need to remove them to process the move.
              // or memoise movecheck
              selected ? (moveCheck(selected, k, towers) ? "green" : "red") : ""
            }
            onClick={() =>
              !selected ? handlePhaseOne(k, v) : handlePhaseTwo(k)
            }
            selected={selected === k}
          />
        ))}
      </TowersWrapper>
      <div style={{ fontSize: "5rem" }}>{selected}</div>
      {isComplete && (
        <div style={{ fontSize: "5rem", textAlign: "center" }}>You Win</div>
      )}
    </Container>
  );
}

export default App;
