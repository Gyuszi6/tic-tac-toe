import React from "react";

type ContextType = {
  playerOne: string;
  playerTwo: string;
  table: GameField;
  row: number;
  column: number;
};

export enum Value {
  empty = "",
  firstPlayer = "X",
  secondPlayer = "O",
}

export type Row = Array<Value>;

export type GameField = Row[];

const DataContext = React.createContext<ContextType>({
  playerOne: "",
  playerTwo: "",
  table: [],
  row: 0,
  column: 0,
});

export default DataContext;
