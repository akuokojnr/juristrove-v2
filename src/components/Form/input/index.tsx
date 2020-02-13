import React from "react";

import { Input, Label } from "./styles";

interface InputProps {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  handleChange: (value: string) => void;
}

const InputEl: React.FC<InputProps> = ({
  type,
  label,
  name,
  placeholder,
  handleChange,
}) => {
  return (
    <Label>
      <span>{label}</span>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
      />
    </Label>
  );
};

export default InputEl;
