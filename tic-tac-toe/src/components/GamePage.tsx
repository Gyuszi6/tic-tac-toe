import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataContext, { Row, Value } from "../store/data-context";
import {
  Container,
  HeaderContainer,
  GameTable,
  TableData,
  TableRow,
} from "./styles";
import useGame from "./useGame";

const GamePage = () => {
  const { timer, valueHandler, active } = useGame();
  const ctx = useContext(DataContext);
  const nav = useNavigate();

  useEffect(() => {
    if (ctx.playerOne === "") {
      nav("/home");
    }
  }, [nav, ctx.playerOne]);

  return (
    <Container>
      <HeaderContainer>
        <div>Player1: {ctx.playerOne}</div>
        <div>Time: {timer} </div>
        <div>Player2: {ctx.playerTwo}</div>
        <div>Active: {active}</div>
      </HeaderContainer>
      <GameTable>
        <tbody>
          {ctx.table.map((row: Row, rowIndex: number) => (
            <TableRow key={rowIndex}>
              {row.map((value: Value, columnIndex: number) => (
                <TableData
                  key={columnIndex}
                  onClick={() => {
                    valueHandler(value, rowIndex, columnIndex);
                  }}
                >
                  {value}
                </TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </GameTable>
    </Container>
  );
};

export default GamePage;
