import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DataContext from "./store/data-context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DataContext.Provider
    value={{
      playerOne: "",
      playerTwo: "",
      table: [],
      row: 0,
      column: 0,
    }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DataContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
