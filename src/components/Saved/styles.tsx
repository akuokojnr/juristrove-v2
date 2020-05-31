import styled from "styled-components";

import media from "utils/media";

export const Content = styled.ul`
  margin: 0;

  li {
    display: flex;
    align-items: center;
    list-style-type: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.limeGray};
    transition: all ease 150ms;
    padding: 0.4rem 0.6rem;

    :last-child {
      border: none;
    }

    a {
      width: 100%;
    }

    :hover {
      background: rgba(79, 90, 89, 0.09);
      border-radius: 6px;

      & > button {
        opacity: 1;
      }
    }
  }
`;

export const LinkText = styled.div`
  span {
    font-size: 0.85rem;
    color: ${({ theme }) => theme.colors.smallText};
  }
`;

export const LinkTitle = styled.p`
  color: ${({ theme }) => theme.colors.text} !important;
  font-size: 1rem !important;
  margin-bottom: 0 !important;
`;

export const NoData = styled.span`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const SavedButton = styled.button`
  ${({ theme }) => theme.buttonPrimary};
  font-weight: 500;
  padding: 0.25rem 1rem;
  transition: all 240ms ease;
  color: ${({ theme }) => theme.colors.darkCyan2};
  margin-left: auto;
  opacity: 0;
  display: none;

  ${({ theme }) => media.sm`
    display: block;
    background: transparent;
    border: 2px solid ${theme.colors.text};

    &:hover {
    background: ${({ theme }) => theme.colors.errorLight};
    color: ${({ theme }) => theme.colors.errorDark};
    border: 2px solid ${({ theme }) => theme.colors.errorLight};
  }
  `};

  svg {
    color: ${({ theme }) => theme.colors.darkCyan2};
  }
`;
