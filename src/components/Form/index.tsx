import React, { useState } from "react";

import Input from "./input/index";
import Button from "components/Button";

import { FormWrap, StyledLink } from "./styles";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <>
      <FormWrap>
        <Input type="email" label="Email" name="email" handleChange={setEmail} />
        <Input
          type="password"
          label="Password"
          name="password"
          handleChange={setPassword}
        />
        <Button type="submit" buttonText="Sign in" />
      </FormWrap>
      <p>Don't have an account? <StyledLink to="/sign-up">Sign up</StyledLink></p>
    </>
  );
};

export default Form;
