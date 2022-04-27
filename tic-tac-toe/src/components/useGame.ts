import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext, { Value, GameField } from "../store/data-context";

const useGame = () => {
  const [timer, setTimer] = useState(0);
  const [playerId, setPlayerId] = useState(1);
  const ctx = useContext(DataContext);
  const [active, setActive] = useState(ctx.playerOne);
  const nav = useNavigate();

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

  const toTheGame = (
    row: number,
    column: number,
    playerOne: string,
    playerTwo: string
  ) => {
    ctx.row = row;
    ctx.column = column;
    ctx.playerOne = playerOne;
    ctx.playerTwo = playerTwo;
    ctx.table = createTable(row, column);
    nav("/game");
  };

  const onClickHandler = (
    value: Value,
    rowIndex: number,
    columnIndex: number
  ) => {
    if (playerId === 1 && value === Value.empty) {
      ctx.table[rowIndex][columnIndex] = Value.firstPlayer;
      const result = checkWin(rowIndex, columnIndex);
      if (result === 1) {
        alert(`${ctx.playerOne} won`);
        nav("/home");
      }
      setActive(ctx.playerTwo);
      setPlayerId(2);
    }
    if (playerId === 2 && value === Value.empty) {
      ctx.table[rowIndex][columnIndex] = Value.secondPlayer;
      const result = checkWin(rowIndex, columnIndex);
      if (result === 2) {
        alert(`${ctx.playerTwo} won`);
        nav("/home");
      }
      setActive(ctx.playerOne);
      setPlayerId(1);
    }
  };

  const checkWin = (row: number, column: number) => {
    let sum = 1;
    const value = playerId === 1 ? Value.firstPlayer : Value.secondPlayer;
    //-------függőleges--------------------------------------
    for (let i = row - 1; i > row - 5; i--) {
      if (i >= 0 && ctx.table[i][column] === value) {
        sum++;
      } else {
        break;
      }
    }
    for (let i = row + 1; i < row + 5; i++) {
      if (i < ctx.column && ctx.table[i][column] === value) {
        sum++;
      } else {
        break;
      }
    }
    if (sum >= 5) {
      return playerId;
    } else {
      sum = 1;
    }
    //-------vízszintes--------------------------------------
    for (let i = column - 1; i > column - 5; i--) {
      if (i >= 0 && ctx.table[row][i] === value) {
        sum++;
      } else {
        break;
      }
    }
    for (let i = column + 1; i < column + 5; i++) {
      if (i < ctx.row && ctx.table[row][i] === value) {
        sum++;
      } else {
        break;
      }
    }
    if (sum >= 5) {
      return playerId;
    } else {
      sum = 1;
    }
    ////-------balalulról átló--------------------------------------
    for (
      let i = row + 1, j = column - 1;
      i < row + 5 || j > column - 5;
      i++, j--
    ) {
      if (i < ctx.row && j >= 0 && ctx.table[i][j] === value) {
        sum++;
      } else {
        break;
      }
    }
    for (
      let i = row - 1, j = column + 1;
      i > row - 5 || j < column + 5;
      i--, j++
    ) {
      if (i >= 0 && j < ctx.column && ctx.table[i][j] === value) {
        sum++;
      } else {
        break;
      }
    }
    if (sum >= 5) {
      return playerId;
    } else {
      sum = 1;
    }
    //-------balfelülről átló--------------------------------------
    for (
      let i = row - 1, j = column - 1;
      i > row - 5 || j > column - 5;
      i--, j--
    ) {
      if (i >= 0 && j >= 0 && ctx.table[i][j] === value) {
        sum++;
      } else {
        break;
      }
    }
    for (
      let i = row + 1, j = column + 1;
      i < row + 5 || j < column + 5;
      i++, j++
    ) {
      if (i < ctx.row && j < ctx.column && ctx.table[i][j] === value) {
        sum++;
      } else {
        break;
      }
    }
    if (sum >= 5) {
      return playerId;
    } else {
      sum = 1;
    }

    return 0;
  };

  return { timer, createTable, onClickHandler, active, toTheGame };
};

export default useGame;
