import styled from "styled-components";

import media from "utils/media";

import { ReactComponent as Back } from "assets/icons/back.svg";
import { ReactComponent as Bookmark } from "assets/icons/bookmark.svg";

export const Categories = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 150px;
  grid-gap: 2rem;

  ${media.sm`
    grid-auto-rows: 200px;
  `}
`;

export const Card = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 11px;
  padding: 2rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: all ease 340ms;
  position: relative;
  overflow: hidden;

  p {
    color: ${({ theme }) => theme.colors.text};
    z-index: 2;
    position: relative;

    :first-child {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 0.8rem;
    }

    :nth-child(2) {
      font-size: 0.9rem;
      margin-bottom: auto;
    }

    :last-child {
      font-size: 0.9rem;
      color: rgba(13, 16, 24, 0.5);
      font-weight: 700;
    }
  }

  :hover {
    box-shadow: ${({ theme }) => theme.boxShadow3};
    border: 2px solid ${({ theme }) => theme.colors.moderateCyan};

    p {
      color: ${({ theme }) => theme.colors.moderateCyan};
    }
  }
`;

export const Lists = styled.div`
  margin: 2rem 0;
  padding: 1.4rem 1rem;
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
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.limeGray};
    transition: all ease 150ms;

    a {
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.125rem;
      padding: 0.8rem;
      margin-bottom: 0.5rem;
      display: flex;
      flex-direction: column;
      width: 85%;
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

export const BookmarkIcon = styled(Bookmark)`
  margin-left: auto;
  width: 40px;
  height: 40px;
  transform: scale(0.75);
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

export const Head = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  p {
    margin: 0 auto;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
    font-weight: 500;
  }
`;

export const BackIcon = styled(Back)`
  width: 40px;
  margin-bottom: -0.5rem;
  transform: scale(0.65);
  cursor: pointer;
  position: absolute;
  left: 0;
  margin-top: 0.1rem;
`;

export const NoData = styled.div`
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin-top: 3rem;
  }
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  margin: 100px auto 0;

  img {
    filter: grayscale(1);
  }
`;
