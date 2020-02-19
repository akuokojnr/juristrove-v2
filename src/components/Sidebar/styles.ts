import styled from "styled-components";

import media from "utils/media";

import { ReactComponent as Menu } from "assets/icons/menu.svg";
import { ReactComponent as Close } from "assets/icons/close.svg";

const Wrap = styled.aside`
  height: 100vh;
  max-width: 300px;
  width: 100%;

  ${({ isOpen }: { isOpen: boolean }) => isOpen && `
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    max-width: 100vw;
    background-color: rgba(0, 0, 0, 0.09);
    transition: all ease 240ms;
  `}
`;

const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem;

  ${media.md`
    padding: 2rem 3rem;
  `}

  ${({ isOpen }: { isOpen: boolean }) => isOpen && `
    width: 300px;
    background-color: white;
  `}
`;

const NavItems = styled.ul`
  margin-left: 0;
  display: none;
  flex-direction: column;
  opacity: 0;

  ${({ isOpen }: { isOpen: boolean }) => isOpen && `
    display: flex;
    width: 300px;
    background-color: white;
    opacity: 1;
    transition: opacity ease 340ms;
  `}

  ${media.md`
    display: flex;
    opacity: 1
  `}
`;

const NavItem = styled.li`
  list-style-type: none;
  margin-bottom: 1.15rem;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
  }

  span {
    margin-left: 18px;
  }
`;

const Brand = styled(NavItem)`
  margin-bottom: 5rem;

  a {
    font-size: 1.7rem;
    font-weight: bold;
  }
`;

const MenuIcon = styled(Menu)`
  height: 50px;
  width: 70px;
  margin-left: -2rem;

  ${media.md`
    display: none;
  `}
`;

const CloseIcon = styled(Close)`
  height: 50px;
  width: 70px;
  margin-left: -2rem;

  ${media.md`
    display: none;
  `}
`;

export { Wrap, Nav, NavItems, NavItem, Brand, MenuIcon, CloseIcon };
