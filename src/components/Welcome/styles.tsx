import styled from "styled-components";

import media from "utils/media";

const Blurb = styled.div`
  border-radius: 15px;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.lightCyan};
  color: ${({ theme }) => theme.colors.darkCyan};
  position: relative;
  overflow: hidden;

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
    font-size: 2rem;
    z-index: 2;
    position: relative;

    ${media.md`
        font-size: 2.3rem;
    `}
  }

  p {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    z-index: 2;
    position: relative;

    ${media.md`
        font-size: 1.4rem;
    `}
  }
`;

export { Blurb };
