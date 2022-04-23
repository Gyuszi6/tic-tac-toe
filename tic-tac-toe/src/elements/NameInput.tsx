import { InputContainer, PlayerNameInput } from "../components/styles";
import React from "react";

type NameInputProps = {
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const NameInput = ({ value, placeholder, onChange }: NameInputProps) => {
  return (
    <InputContainer>
      <label htmlFor={placeholder}>{placeholder}: </label>
      <PlayerNameInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default NameInput;
