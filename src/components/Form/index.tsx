import React, { useState } from "react";
import { useForm } from "react-hook-form";
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

  const { register, handleSubmit, reset, errors } = useForm();

  const [error, setError] = useState<string>("");
  const [hasError, setHasError] = React.useState(false);

  const signIn = async (email: string, password: string) => {
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

  const signUp = async (username: string, email: string, password: string) => {
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

  const resetPassword = async (email: string) => {
    try {
      await firebase?.auth().sendPasswordResetEmail(email);
      setStatus(true);
    } catch (err) {
      setError(err.message);
      setHasError(true);
      setStatus(false);
    }
  };

  const onSubmit = (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    const { username, email, password } = data;

    switch (type) {
      case "sign-in":
        signIn(email, password);
        break;
      case "sign-up":
        signUp(username, email, password);
        break;
      case "reset":
        resetPassword(email);
        break;
    }

    reset();
  };

  return (
    <>
      <Notification
        message={error}
        active={hasError}
        handleClose={setHasError}
      />
      <FormWrap onSubmit={handleSubmit(onSubmit)}>
        {type === "sign-up" && (
          <Input
            type="text"
            label="Username"
            name="username"
            ref={register({ required: true })}
            error={errors?.firstname}
          />
        )}
        <Input
          type="email"
          label="Email"
          name="email"
          ref={register({ required: true })}
          error={errors?.email}
        />
        {type !== "reset" && (
          <Input
            type="password"
            label="Password"
            name="password"
            ref={register({ required: true })}
            error={errors?.password}
            hasForgotPassword={type !== "sign-in"}
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
