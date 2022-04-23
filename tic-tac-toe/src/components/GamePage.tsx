import { useContext } from "react";
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
  const { timer } = useGame();
  const ctx = useContext(DataContext);
  return (
    <Container>
      <HeaderContainer>
        <div>Player1: {ctx.playerOne}</div>
        <div>Time: {timer} </div>
        <div>Player2: {ctx.playerTwo}</div>
      </HeaderContainer>
      <GameTable>
        <tbody>
          {ctx.table.map((row: Row, rowindex: number) => (
            <TableRow key={rowindex}>
              {row.map((value: Value, columnindex: number) => (
                <TableData key={columnindex}>{value}</TableData>
              ))}
            </TableRow>
          ))}
        </tbody>
      </GameTable>
    </Container>
  );
};

export default GamePage;
