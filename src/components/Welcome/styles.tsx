import styled from "styled-components";

import media from "utils/media";

const Blurb = styled.div`
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

const ActivityWrap = styled.div`
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
    margin-bottom: 2rem;

    ${media.md`
      font-size: 1.5rem;
    `}
  }

  ul {
    margin: 0;
  }

  li {
    list-style-type: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.limeGray};
    transition: all ease 150ms;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.125rem;
      padding: 0.8rem;
      margin-bottom: 0.5rem;
      display: flex;
      flex-direction: column;
    }

    span {
      font-size: 0.85rem;
      color: ${({ theme }) => theme.colors.smallText};
    }

    :last-child {
      border: none;

      a {
        margin-bottom: 0;
      }
    }

    :hover {
      background: rgba(79, 90, 89, 0.09);
      border-radius: 6px;
    }
  }
`;

export { Blurb, ActivityWrap };
