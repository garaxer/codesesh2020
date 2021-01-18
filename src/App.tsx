import React, { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Tower from "./components/Tower";

import { compose, moveBlock } from "./hanoi";
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
    1: {
      color: "",
      disks: [1, 2, 3, 4, 5, 6],
    },
    2: {
      color: "",
      disks: [],
    },
    3: {
      color: "",
      disks: [],
    },
  });

  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    console.log("selection changed");
  }, [selected]);

  const moveCheck = (from: string, to: string, towers: Towers) =>
    towers[to].disks.length
      ? towers[to].disks[0] > towers[from].disks[0]
      : true;

  const changeColors = (newSelection: string) => {
    if (!selected) {
      setSelected(newSelection);
      const c = Object.entries(towers).reduce(
        (a, [k, v]) => ({
          ...a,
          [k]: {
            disks: v.disks,
            color:
              k === newSelection || !moveCheck(newSelection, k, towers)
                ? "red"
                : "green",
          },
        }),
        {}
      );
      setTowers(c);
    } else if (!moveCheck(selected, newSelection, towers)) {
      return;
    } else {
      setSelected("");
      const onlyTowers = Object.entries(towers).reduce(
        (a, [k, v]) => ({
          ...a,
          [k]: v.disks,
        }),
        {}
      );
      const newTower = Object.entries(
        moveBlock(selected, newSelection)(onlyTowers)
      ).reduce(
        (a, [k, v]) => ({
          ...a,
          [k]: { disks: v, color: "" },
        }),
        {}
      );

      setTowers(newTower);
    }
  };

  const towerColour = (index: string) => {
    // TODO: if the tower is empty blink or something
    // const c = Object.keys(towers).reduce((a, c) => {
    //   const t = towers[parseInt(c)].disks; // this tower
    //   const newBlockColour = !t.length || t[0] > towers[index].disks[0] ? "green" : "red";
    //   return { ...a, [c]: newBlockColour };
    // }, {});
    //setTowers(c);
    //filter the towers to get rid of the selected, map overthem and get a final colour needed depending on some formula that checks if its possible to mvoe the block
  };

  const moveBlockToAnotherTower = (index: number) => {
    // //
    // console.log(index);
    // console.log({ ...colours, [index]: "lightblue" });
    // const currentlySelected = Object.keys(colours).filter((v, i) =>
    //   colours[parseInt(v)].includes("lightblue")
    // );
    // const currentlySelectedIndex = parseInt(currentlySelected[0]);
    // if (colours[index].includes("green")) {
    //   //move
    //   console.log("Green");
    //   setTowers(moveBlock(currentlySelectedIndex, index)(towers));
    //   setColours({
    //     1: "",
    //     2: "",
    //     3: "",
    //   });
    // }
  };

  return (
    <Container>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        {Object.entries(towers).map(([k, v]) => (
          <Tower
            tower={v}
            color={towers[k].color}
            onClick={() => (v.disks.length || selected) && changeColors(k)}
            selected={selected === k}
          />
        ))}
      </TowersWrapper>
      <div style={{ fontSize: "5rem" }}>{selected}</div>
    </Container>
  );
}

export default App;
