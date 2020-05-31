import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useCountUp } from "react-countup";

import Form from "components/Form";

import {
  Wrap,
  ImgWrap,
  ImgTitle,
  FormWrap,
  Logo,
  Title,
  Reset,
  Status,
} from "./styles";

interface FormPageProps {
  type: "sign-in" | "sign-up" | "reset";
  title: string;
  buttonText: string;
}

const FormPage: React.FC<FormPageProps> = ({ type, title, buttonText }) => {
  const [resetLinkStatus, setResetLinkStatus] = useState<boolean>(false);
  const { countUp } = useCountUp({ end: 2000, suffix: "+", duration: 8 });

  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "woman-with-laptop" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  let imageStack = [
    `linear-gradient(0deg, rgba(0,0,0,8) 0%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.15) 100%)`,
    data.image.childImageSharp.fluid,
  ];

  return (
    <Wrap>
      <ImgWrap Tag="div" fluid={imageStack}>
        <div>
          <ImgTitle>Make law research easier and enjoyable again</ImgTitle>
          <p>Access {countUp} decided cases anywhere, anytime.</p>
        </div>
      </ImgWrap>
      <FormWrap>
        <Logo>Juristrove</Logo>
        <Title>{title}</Title>
        {resetLinkStatus ? (
          <Status>
            <p>Check your email for password reset link.</p>
          </Status>
        ) : (
          <>
            {type === "reset" && (
              <Reset>Enter the email associated with your account.</Reset>
            )}
            <Form
              type={type}
              buttonText={buttonText}
              setStatus={setResetLinkStatus}
            />
          </>
        )}
      </FormWrap>
    </Wrap>
  );
};

export default FormPage;
