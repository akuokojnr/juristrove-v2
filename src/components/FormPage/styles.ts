import styled from "styled-components";
import BgImg from "gatsby-background-image";

import media from "utils/media";

const Wrap = styled.section`
  height: 100vh;

  div:first-child {
    display: none;
  }

  div:last-child {
    margin-top: 10rem;
  }

  ${media.md`
    display: grid;
    grid-template-columns: 1fr 1fr;

    div:first-child {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1.5rem;
    }

    div:last-child {
      margin-top: 0;
    }
  `}
`;

const ImgWrap = styled(BgImg)`
  & p {
    margin: 2rem auto 0;
    max-width: 80%;
    color: white;
    font-size: 1.5rem;
  }
`;

const ImgTitle = styled.h3`
  max-width: 80%;
  font-size: 3rem;
  font-weight: 500;
  color: white;
  margin: 0 auto;
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
