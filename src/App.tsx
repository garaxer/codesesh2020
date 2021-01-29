import React, { useState } from "react";
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
    console.log("phas1");

    // Click on the same tower, reset it other change the selection
    selected === k ? setSelected("") : (v.length || selected) && setSelected(k);
  };

  const handlePhaseTwo = (k: String) => {
    console.log("phas2");
    // valid move, then move it and reset to phase 1
    moveCheck(selected, k, towers) && setTowers(moveBlock(selected, k)(towers));
    setSelected("");
  };

  const [mouseCrds, setMouseCrds] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    e.persist();
    setMouseCrds(mouseCrds => ({ ...mouseCrds, x: e.clientX, y: e.clientY }));
  };

  return (
    <Container onMouseMove={handleMouseMove}>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        {Object.entries(towers).map(([k, v]) => (
          <Tower
            key={k}
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
            mouseCrds={mouseCrds}
          />
        ))}
      </TowersWrapper>
      <div style={{ fontSize: "5rem" }}>{selected}</div>

      {isComplete && (
        <div style={{ fontSize: "5rem", textAlign: "center" }}>
          <div>You Win</div>
          <button
            onClick={() =>
              setTowers({
                1: Array.from(
                  { length: towers[3].length + 1 },
                  (_, i) => i + 1
                ),
                2: [],
                3: [],
              })
            }
          >
            Next
          </button>
        </div>
      )}
    </Container>
  );
}

export default App;
