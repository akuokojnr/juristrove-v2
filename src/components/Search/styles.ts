import styled from "styled-components";

import media from "utils/media";

import { Search } from "@styled-icons/boxicons-regular/Search";

export const SearchWrap = styled.form`
  position: relative;
  width: 100%;
  background: rgba(32, 68, 64, 0.15);
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  border: none;
  font-size: 1rem;
  padding: 1rem 0.8rem 1rem 0.8rem;
  position: relative;
  width: 100%;
  background: transparent;

  :focus {
    outline: none;
  }

  ${media.md`
    font-size: 1.2rem;
    padding: 1.3rem 1.5rem 1.3rem 0.8rem;
  `}
`;

export const SearchIcon = styled(Search)`
  margin-left: 0.9rem;
  margin-bottom: -0.23rem;
  opacity: 0.6;
  transform: scale(0.7);

  ${media.md`
    transform: scale(0.9);
  `}
`;

export const HitsWrapper = styled.section`
  margin-top: 3rem;

  ${media.md`
    margin-top: 6rem;
  `};

  .ais-Hits-list {
    margin-left: 0 !important;

    li {
      margin-bottom: 2rem;
      list-style-type: none;
    }
  }
`;

export const HitWrap = styled.article`
  display: flex;
  align-items: center;
  padding: 1.4rem;
  border-radius: 11px;
  border: 1.7px solid ${({ theme }) => theme.colors.limeGray};
  transition: all ease 240ms;

  :hover {
    box-shadow: rgba(79, 90, 89, 0.16) 0px 32px 32px -16px,
      rgba(79, 90, 89, 0.12) 0px 28px 28px -16px;

    svg {
      opacity: 1;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    border-right: none;
  }

  h4 {
    margin-bottom: 0.9rem;
    font-size: 1.15rem;
    font-weight: 600;
    font-family: "Cabin";
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    font-size: 0.95rem;
  }

  ${media.sm`
    border-right: 1.7px solid ${({ theme }) => theme.colors.limeGray};

    h4, p {
      max-width: 90%;
    }
  `}

  ${media.md`
    padding: 1.8rem;

    a {
      border-right: none;
      max-width: 90%;
    }

    h3 {
      font-size: 1.3rem;
    }

    p {
      font-size: 1rem;
    }
  `}

  .ais-Snippet-highlighted {
    color: ${({ theme }) => theme.colors.moderateCyan2};
    font-weight: 700;
  }
`;

export const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`;
