import React, { useState } from "react";

import Input from "./input/index";
import Button from "components/Button";

import { FormWrap } from "./styles";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
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
  );
};

export default Form;
