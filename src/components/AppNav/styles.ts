import styled from "styled-components";
import { Link } from "gatsby";

import media from "utils/media";

import { ReactComponent as Menu } from "assets/icons/menu.svg";
import { ReactComponent as Close } from "assets/icons/close.svg";

const Nav = styled.nav`
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

const Wrap = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const NavItems = styled.ul`
  display: none;

  ${media.md`
    display: flex;
    align-items: center;
    margin: 0 auto;
    opacity: 1
  `}
`;

const MobileNav = styled.ul`
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

const NavItem = styled.li`
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

const Brand = styled(Link)`
  font-size: 1.4rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0 auto;

  ${media.md`
    margin: 0;
    font-size: 1.7rem;
  `}
`;

const MenuIcon = styled(Menu)`
  height: 45px;
  width: 60px;
  margin-left: -1.4rem;
  transform: scale(0.8);

  ${media.md`
    display: none;
  `}
`;

const CloseIcon = styled(Close)`
  height: 45px;
  width: 60px;
  margin-left: -1.5rem;
  margin-bottom: -0.5rem;
  transform: scale(0.8);

  ${media.md`
    display: none;
  `}
`;

const Button = styled.button`
  ${({ theme }) => theme.buttonPrimary};
  font-weight: 500;
  padding: 0.25rem 1rem;

  ${media.md`
    margin-left: 0;
    padding: 0.28rem 1.2rem;
  `}
`;

export {
  Wrap,
  Nav,
  NavItems,
  MobileNav,
  NavItem,
  Brand,
  Button,
  MenuIcon,
  CloseIcon,
};
