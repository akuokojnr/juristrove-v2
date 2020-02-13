import React, { useState } from "react";

import Input from "./input/index";
import Button from "components/Button";

import { FormWrap, StyledLink } from "./styles";

interface FormProps {
  type: "sign-in" | "sign-up" | "reset";
  buttonText: string;
}

const Form: React.FC<FormProps> = ({ type, buttonText }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <FormWrap>
        <Input
          type="email"
          label="Email"
          name="email"
          handleChange={setEmail}
        />
        {type !== "reset" && (
          <Input
            type="password"
            label="Password"
            name="password"
            hasForgotPassword={type !== "sign-in"}
            handleChange={setPassword}
          />
        )}
        <Button type="submit" buttonText={buttonText} />
      </FormWrap>
      {type === "sign-in" && (
        <p>
          Don't have an account? <StyledLink to="/sign-up">Sign up</StyledLink>
        </p>
      )}
      {(type === "sign-up" || type === "reset") && (
        <p>
          Already have an account? <StyledLink to="/">Sign in</StyledLink>
        </p>
      )}
    </>
  );
};

export default Form;
