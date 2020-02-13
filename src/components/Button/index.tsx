import React from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
  type: "submit" | "button";
  buttonText: string;
}

const Button: React.FC<ButtonProps> = ({ type, buttonText }) => (
  <StyledButton type={type}>{buttonText}</StyledButton>
);

export default Button;
