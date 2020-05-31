import styled from "styled-components";
import BgImg from "gatsby-background-image";

import media from "utils/media";

export const Wrap = styled.section`
  height: 100vh;

  div:first-child {
    display: none;
  }

  div:last-child {
    padding-top: 10rem;
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
      padding-top: 0;
    }
  `}
`;

export const ImgWrap = styled(BgImg)`
  & p {
    margin: 2rem auto 0;
    max-width: 80%;
    color: white;
    font-size: 1.5rem;
  }
`;

export const ImgTitle = styled.h3`
  max-width: 80%;
  font-size: 3rem;
  font-weight: 500;
  color: white;
  margin: 0 auto;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;
`;

export const Logo = styled.h2`
  font-family: "Cabin";
  color: ${({ theme }) => theme.colors.moderateCyan};
  margin-bottom: 1rem;
`;

export const Title = styled.p`
  font-family: "Cabin";
  font-size: 1.3rem;
`;

export const Reset = styled.span`
  font-size: 1rem;
  margin-top: -1rem;
`;

export const Status = styled.div`
  max-width: 100%;

  ${media.md`
  	max-width: 400px;
  `}

  p {
    font-size: 1.1rem;
  }
`;
