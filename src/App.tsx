import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Tower from "./components/Tower";

import { Towers } from "./Types";

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

function App() {
  const [towers, setTowers] = useState<Towers>({
    1: [1, 2, 3, 4, 5, 6],
    2: [],
    3: [],
  });

  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    console.log("selection changed");
  }, [selected]);

  return (
    <Container>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        {Object.entries(towers).map(([k, v]) => (
          <Tower
            key={k}
            towers={towers}
            akey={k}
            onClick={() => (v.length || selected) && setSelected(k)}
            selected={selected}
            setSelected={setSelected}
            setTowers={setTowers}
          />
        ))}
      </TowersWrapper>
      <div style={{ fontSize: "5rem" }}>{selected}</div>
    </Container>
  );
}

export default App;
