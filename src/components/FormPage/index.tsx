import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Form from "components/Form";

import { Wrap, ImgWrap, ImgTitle, FormWrap, Title, Reset } from "./styles";

interface FormPageProps {
  type: "sign-in" | "sign-up" | "reset";
  title: string;
  buttonText: string;
}

const FormPage: React.FC<FormPageProps> = ({ type, title, buttonText }) => {
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
          <p>Access 2000+ decided cases anywhere, anytime.</p>
        </div>
      </ImgWrap>
      <FormWrap>
        <Title>{title}</Title>
        {type === "reset" && (
          <Reset>Enter the email associated with your account.</Reset>
        )}
        <Form type={type} buttonText={buttonText} />
      </FormWrap>
    </Wrap>
  );
};

export default FormPage;
