import styled, { keyframes } from "styled-components";

import media from "utils/media";

export const Blurb = styled.div`
  border-radius: 15px;
  padding: 2rem 1.8rem;
  background: ${({ theme }) => theme.colors.lightCyan};
  color: ${({ theme }) => theme.colors.darkCyan};
  position: relative;
  overflow: hidden;
  z-index: -1;

  ${media.md`
    padding: 3rem;
  `}
    :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 1;

    background: url("/blub.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top left;
  }

  h3 {
    font-family: "Cabin";
    font-size: 1.8rem;
    z-index: 2;
    position: relative;

    ${media.md`
      font-size: 2.3rem;
    `}
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.14rem;
    z-index: 2;
    position: relative;

    ${media.md`
      font-size: 1.4rem;
    `}
  }
`;

export const ActivityWrap = styled.div`
  margin: 3rem 0;
  padding: 2rem 1.8rem;
  border-radius: 11px;
  border: 1.7px solid ${({ theme }) => theme.colors.limeGray};

  ${media.md`
    margin-top: 6rem;
    padding: 3rem;
  `}

  p {
    font-size: 1.35rem;
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
    margin-bottom: 1rem;

    ${media.md`
      font-size: 1.5rem;
    `}
  }
`;

const loading = keyframes`
  50% {
    opacity: 0;
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  animation: ${loading} 1.5s linear infinite;
`;
