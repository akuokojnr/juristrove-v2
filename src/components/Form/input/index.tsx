import React from "react";

import { Input, Label, StyledLink, Error } from "./styles";

interface InputProps {
  type: string;
  hasForgotPassword?: boolean;
  label: string;
  name: string;
  placeholder?: string;
  value: string;
  error?: string;
  handleChange: (value: string) => void;
}

const InputEl: React.FC<InputProps> = React.forwardRef(
  (
    { type, label, hasForgotPassword, name, value, placeholder, error },
    ref
  ) => {
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
          ref={ref}
        />
        {error && <Error>{label} is required</Error>}
      </Label>
    );
  }
);

export default InputEl;
