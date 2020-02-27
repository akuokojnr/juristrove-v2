import styled from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import media from "utils/media";

import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Bookmark } from "assets/icons/bookmark.svg";

const SearchWrap = styled.form`
  position: relative;
  width: 100%;
  background: rgba(32, 68, 64, 0.15);
  border-radius: 6px;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
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

const SearchIcon = styled(Search)`
  height: 30px;
  width: 30px;
  margin-left: 0.9rem;
  margin-bottom: -0.23rem;
  opacity: 0.6;
  transform: scale(0.7);

  ${media.md`
    transform: scale(0.9);
  `}
`;

const HitsWrapper = styled.section`
  margin-top: 6rem;

  .ais-Hits-list {
    margin-left: 0 !important;

    li {
      margin-bottom: 2rem;
      list-style-type: none;
    }
  }
`;

const HitWrap = styled.article`
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
      max-width: 70%;
    }

    p {
      font-size: 1rem;
      max-width: 70%;
    }
  `}

  .ais-Snippet-highlighted {
    color: ${({ theme }) => theme.colors.moderateCyan2};
    font-weight: 700;
  }
`;

const BookmarkIcon = styled(Bookmark)`
  display: none;
  margin-left: 1rem;
  width: 40px;
  height: 40px;
  transform: scale(0.85);
  cursor: pointer;
  opacity: 1;
  transition: opacity ease-in 350ms;

  path {
    ${({ theme, active }) =>
      active &&
      `
    fill: ${theme.colors.moderateCyan2};
  `}
  }

  ${media.sm`
    display: block;
  `}

  ${media.md`
    margin-left: auto;
    opacity: 0;

    ${({ active }) => active && `opacity: 1;`}
  `}
`;

const Root = styled.div`
  position: relative;
  display: grid;
  grid-gap: 1em;
`;

const StyledDialogContent = styled(DialogContent)`
  max-width: 400px;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
`;

const Close = styled.button`
  background: none;
  border: none;
  margin-left: auto !important;
  transform: scale(1.2);
  cursor: pointer;

  span {
    font-size: 1rem;
  }
`;

export {
  SearchWrap,
  SearchInput,
  SearchIcon,
  HitsWrapper,
  HitWrap,
  BookmarkIcon,
  Root,
  StyledDialogContent,
  Close,
};
