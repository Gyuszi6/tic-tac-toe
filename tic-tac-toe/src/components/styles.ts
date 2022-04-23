import styled from "styled-components";

export const Container = styled.div``;

export const HomePageTitle = styled.h1`
  text-align: center;
  margin: 5px;
`;

export const InputContainer = styled.form`
  text-align: center;
  margin: 5px;
`;

export const GameButton = styled.button`
  background-color: #FFFFFF;
  border-radius: 40em;
  border-style: none;
  box-shadow: #ADCFFF 0 -12px 6px inset;
  color: #000000;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  margin: 10px;
  padding: 10px 10px;
  text-align: center;
  touch-action: manipulation;

}

&:hover :enabled {
  background-color: #FFC229;
  box-shadow: #FF6314 0 -6px 8px inset;
}

&:active {
  transform: scale(1.025);
}

&:disabled {
  color: #969696;
  cursor: not-allowed;

}
`;

export const Head = styled.header`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

export const PlayerNameInput = styled.input`
  border-radius: 9px;
  margin-left: 5px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 12px 0;
`;

export const GameTable = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  border: 2px solid black;
  width: 450px;
  height: 450px;
  padding: 0;
`;

export const TableRow = styled.tr`
  padding: 0;
  margin: 0;
`;
export const TableData = styled.td`
  padding: 0;
  margin: 0;
  text-align: center;
  border: 2px solid black;
  width: 10px;
  height: 10px;
  f
`;
