import { useState, useEffect, useContext } from "react";
import DataContext, { Value, GameField } from "../store/data-context";

const useGame = () => {
  const [timer, setTimer] = useState(0);
  const [playerId, setPlayerId] = useState(1);
  const ctx = useContext(DataContext);
  const [active, setActive] = useState(ctx.playerOne);

  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  const createTable = (row: number, column: number) => {
    const table: GameField = [];
    for (let i = 0; i < row; i++) {
      table.push([]);
      for (let j = 0; j < column; j++) {
        table[i].push(Value.empty);
      }
    }
    return table;
  };

  const valueHandler = (
    value: Value,
    rowIndex: number,
    columnIndex: number
  ) => {
    if (playerId === 1 && value === Value.empty) {
      ctx.table[rowIndex][columnIndex] = Value.firstPlayer;
      setActive(ctx.playerTwo);
      setPlayerId(2);
    }
    if (playerId === 2 && value === Value.empty) {
      ctx.table[rowIndex][columnIndex] = Value.secondPlayer;
      setActive(ctx.playerOne);
      setPlayerId(1);
    }
  };

  return { timer, createTable, valueHandler, active };
};

export default useGame;
