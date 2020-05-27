import styled from "styled-components";
import { Link } from "gatsby";

import media from "utils/media";

import { Close } from "@styled-icons/evaicons-solid/Close";
import { Menu2 as Menu } from "@styled-icons/evaicons-solid/Menu2";

export const Nav = styled.nav`
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  display: flex;
  justify-content: center;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.white};

  ${media.md`
    padding: 2rem 3rem;
  `}
`;

export const Wrap = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 3;

  button + button {
    margin-left: 1rem;
    margin-right: -0.8rem;

    ${media.lg`
      margin-left: 1.5rem;
      margin-right: 0;
    `};
  }
`;

export const NavItems = styled.ul`
  display: none;

  ${media.md`
    display: flex;
    align-items: center;
    margin: 0 auto;
    opacity: 1
  `}
`;

export const MobileNav = styled.ul`
  display: none;
  position: absolute;
  top: 4rem;
  left: 0;
  right: 0;
  margin-left: 0;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.white};
  transition: all ease-in 340ms;

  ::before {
    content: "";
    position: absolute;
    top: 3rem;
    left: 0;
    right: 0;
    height: 100vh;
    background: rgba(0, 0, 0, 0.67);
    z-index: -1;
  }

  li {
    margin: 0 0 1rem;

    a {
      padding: 0%;
      font-size: 1.1rem;

      :before {
        display: none;
      }
    }
  }

  ${({ isOpen }: { isOpen: boolean }) => isOpen && `display: block;`}

  ${media.md`
      display: none;
  `}
`;

export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 2rem;
  position: relative;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1.2rem 0;

    :before {
      content: "";
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 5px 5px 0 0;
      bottom: 0;
      background: transparent;
      z-index: 1;
    }

    &.active,
    :hover {
      ::before {
        background: ${({ theme }) => theme.colors.moderateCyan2};
      }
    }
  }
`;

export const Brand = styled(Link)`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.moderateCyan};
  margin: 0 auto;

  ${media.md`
    margin: 0;
    font-size: 1.7rem;
  `}
`;

export const MenuIcon = styled(Menu)`
  margin-left: -1rem;

  ${media.md`
    display: none;
  `}
`;

export const CloseIcon = styled(Close)`
  margin-left: -1rem;

  ${media.md`
    display: none;
  `}
`;

export const Button = styled.button`
  ${({ theme }) => theme.buttonPrimary};
  font-weight: 500;
  padding: 0.25rem 1rem;
  transition: all 340ms ease-in-out;

  ${media.md`
    margin-left: 0;
    padding: 0.28rem 1.2rem;
  `}

  &:hover {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.moderateCyan};
    color: ${({ theme }) => theme.colors.moderateCyan};
  }
`;

export const SaveButton = styled(Button)`
  padding: 0;
  border: none;

  ${media.sm`
    border: 2px solid ${({ theme }) => theme.colors.limeGray};
    padding: 0.25rem 1rem;
  `};

  ${media.md`
    padding: 0.28rem 1.2rem;
  `}

  span {
    display: none;

    ${media.sm`
      display: inline;
    `};
  }

  svg {
    ${media.sm`
      display: none;
    `};
  }
`;
