import React from "react";
import "./App.css";
import styled from "styled-components";
import Block from "./components/Block";
import Tower from "./components/Tower";

const blockCount = 5;
const blocks = [3];

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
  return (
    <Container>
      <Title>Hanoi-o</Title>
      <TowersWrapper>
        <Tower>
          <Block size={1}></Block>
          <Block size={2}></Block>
          <Block size={3}></Block>
          <Block size={4}></Block>
          <Block size={5}></Block>
          <Block size={6}></Block>
          <Block size={7}></Block>
          <Block size={8}></Block>
          <Block size={9}></Block>
          <Block size={10}></Block>

          <Buttono>
            <button>{">"}</button>
            <button>{">>"}</button>
          </Buttono>
        </Tower>

        <Tower></Tower>

        <Tower></Tower>
      </TowersWrapper>
    </Container>
  );
}

export default App;
