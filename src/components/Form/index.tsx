import React, { useState } from "react";
import { navigate } from "gatsby";

import Input from "./input/index";
import Button from "components/Button";

import useFirebase from "utils/hooks/useFirebase";

import { FormWrap, StyledLink, Error } from "./styles";

interface FormProps {
  type: "sign-in" | "sign-up" | "reset";
  buttonText: string;
  setStatus?: any;
}

const Form: React.FC<FormProps> = ({ type, buttonText, setStatus }) => {
  const firebase = useFirebase();

  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const signIn = async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      if (typeof window !== `undefined`) {
        window.localStorage.setItem("User", JSON.stringify(user));
        navigate("/app", { replace: true });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const signUp = async () => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .firestore()
        .collection("users")
        .doc(email)
        .set({
          username,
          savedCases: [],
          recentlyView: [],
        });

      if (typeof window !== `undefined`) {
        window.localStorage.setItem("User", JSON.stringify(user));
        navigate("/app", { replace: true });
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const resetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setStatus(true);
    } catch (err) {
      setError(err.message);
      setStatus(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    switch (type) {
      case "sign-in":
        signIn();
        break;
      case "sign-up":
        signUp();
        break;
      case "reset":
        resetPassword();
        break;
    }
  };

  return (
    <>
      <Error>{error}</Error>
      <FormWrap onSubmit={e => handleSubmit(e)}>
        {type === "sign-up" && (
          <Input
            type="text"
            label="Username"
            name="username"
            value={username}
            handleChange={setUsername}
          />
        )}
        <Input
          type="email"
          label="Email"
          name="email"
          value={email}
          handleChange={setEmail}
        />
        {type !== "reset" && (
          <Input
            type="password"
            label="Password"
            name="password"
            value={password}
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
