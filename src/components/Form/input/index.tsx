import React from "react";

import { Input, Label, StyledLink } from "./styles";

interface InputProps {
  type: string;
  hasForgotPassword?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  handleChange: (value: string) => void;
}

const InputEl: React.FC<InputProps> = ({
  type,
  label,
  hasForgotPassword,
  name,
  value,
  placeholder,
  handleChange,
}) => {
  return (
    <Label>
      {type === "password" && !hasForgotPassword ? (
        <div className="pwd">
          <span>{label}</span>
          <span className="forgot-password">
            <StyledLink to="/reset">Forgot password?</StyledLink>
          </span>
        </div>
      ) : (
        <span>{label}</span>
      )}
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={e => handleChange(e.target.value)}
        required
      />
    </Label>
  );
};

export default InputEl;
