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
  const { timer, valueHandler } = useGame();
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
          {ctx.table.map((row: Row, rowIndex: number) => (
            <TableRow key={rowIndex}>
              {row.map((value: Value, columnIndex: number) => (
                <TableData
                  key={columnIndex}
                  onClick={() => valueHandler(value, rowIndex, columnIndex)}
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
