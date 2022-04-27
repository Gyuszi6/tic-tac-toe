import { Container, GameButton, HomePageTitle, InputContainer } from "./styles";
import React, { useState } from "react";
import NameInput from "../elements/NameInput";
import useGame from "./useGame";

const HomePage = () => {
  const [gameMode, setGameMode] = useState("choose");
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");

  const isDisabled =
    gameMode === "choose" || playerOne.length === 0 || playerTwo.length === 0;

  const gameModeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGameMode(event?.target.value);
  };
  const { toTheGame } = useGame();

  const datas = gameMode.split(",");
  let row = parseInt(datas[0]);
  let column = parseInt(datas[1]);

  return (
    <Container>
      <HomePageTitle>Tic-Tac Toe</HomePageTitle>
      <NameInput
        value={playerOne}
        placeholder="Player1"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPlayerOne(event.target.value);
        }}
      />
      <NameInput
        value={playerTwo}
        placeholder="Player2"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPlayerTwo(event.target.value);
        }}
      />
      <InputContainer>
        <label htmlFor="choose">Size: </label>
        <select name="choose" id="choose" onChange={gameModeHandler}>
          <option hidden value="choose">
            Choose
          </option>
          <option value="10,10">10x10</option>
          <option value="15,15">15x15</option>
          <option value="20,20">20x20</option>
        </select>
      </InputContainer>
      <InputContainer>
        <GameButton
          disabled={isDisabled}
          onClick={() => {
            toTheGame(row, column, playerOne, playerTwo);
          }}
        >
          Start Game
        </GameButton>
      </InputContainer>
    </Container>
  );
};

export default HomePage;
