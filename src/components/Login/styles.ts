import styled from "styled-components";
import BgImg from "gatsby-background-image";

import media from "utils/media";

const Wrap = styled.section`
  height: 100vh;
  display: block;

  div:first-child {
    display: none;
  }

  ${media.md`
    display: grid;
    grid-template-columns: 1fr 1fr;

    div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`;

const ImgWrap = styled(BgImg)`
  & p {
    margin-top: 2rem;
    color: white;
    font-size: 1.5rem;
  }
`;

const ImgTitle = styled.h3`
  max-width: 70%;
  font-size: 3rem;
  font-weight: 500;
  color: white;
`;

const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
`;

const Title = styled.h3`
  font-family: "Cabin";
  margin-bottom: 2.3rem;
`;

export { Wrap, ImgWrap, ImgTitle, FormWrap, Title };
