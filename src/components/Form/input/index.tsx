import React from "react";

import { Input, Label, StyledLink } from "./styles";

interface InputProps {
  type: string;
  hasForgotPassword?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  handleChange: (value: string) => void;
}

const InputEl: React.FC<InputProps> = ({
  type,
  label,
  hasForgotPassword,
  name,
  placeholder,
  handleChange,
}) => {
  return (
    <Label>
      {type === "password" && !hasForgotPassword ? (
        <div className="pwd">
          <span>{label}</span>
          <span className="forgot-password">
            <StyledLink to="/reset-password">Forgot password?</StyledLink>
          </span>
        </div>
      ) : (
        <span>{label}</span>
      )}
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
