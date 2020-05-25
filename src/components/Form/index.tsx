import React, { useState } from "react";
import { navigate } from "@reach/router";

import Input from "./input/index";
import Button from "components/Button";
import Notification from "components/Notification";

import useFirebase from "utils/hooks/useFirebase";

import { FormWrap, StyledLink } from "./styles";

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
  const [hasError, setHasError] = React.useState(false);

  const signIn = async () => {
    try {
      await firebase?.auth().signInWithEmailAndPassword(email, password);

      const currentUser = firebase?.auth().currentUser;

      if (typeof window !== `undefined` && currentUser) {
        window.localStorage.setItem("user", JSON.stringify(currentUser));
        window.localStorage.setItem(
          "authType",
          JSON.stringify({ isLogin: true })
        );
        navigate("/app");
      }
    } catch (err) {
      setError(err.message);
      setHasError(true);
    }
  };

  const signUp = async () => {
    try {
      await firebase?.auth().createUserWithEmailAndPassword(email, password);

      const currentUser = firebase?.auth().currentUser;

      if (currentUser) {
        currentUser.updateProfile({
          displayName: username,
        });

        await firebase
          ?.firestore()
          .collection(`users`)
          .doc(`${currentUser.uid}`)
          .set({
            username: username,
            email: email,
          });
      }

      if (typeof window !== `undefined`) {
        window.localStorage.setItem("User", JSON.stringify(currentUser));
        window.localStorage.setItem(
          "authType",
          JSON.stringify({ isLogin: false })
        );
        navigate("/app");
      }
    } catch (err) {
      setError(err.message);
      setHasError(true);
    }
  };

  const resetPassword = async () => {
    try {
      await firebase?.auth().sendPasswordResetEmail(email);
      setStatus(true);
    } catch (err) {
      setError(err.message);
      setHasError(true);
      setStatus(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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
      <Notification
        message={error}
        active={hasError}
        handleClose={setHasError}
      />
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
