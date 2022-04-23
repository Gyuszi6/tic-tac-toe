import { useState, useEffect } from "react";
import { Value, GameField } from "../store/data-context";

const useGame = () => {
  const [timer, setTimer] = useState(0);

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

  return { timer, createTable };
};

export default useGame;
