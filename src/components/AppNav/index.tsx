import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import uuid from "uuid/v4";

import useFirebase from "utils/hooks/useFirebase";

import { BookmarkStar as BookmarkIcon } from "@styled-icons/boxicons-solid/BookmarkStar";

import {
  Wrap,
  Nav,
  NavItems,
  MobileNav,
  NavItem,
  Brand,
  Button,
  SaveButton,
  MenuIcon,
  CloseIcon,
} from "./styles";

const LINKS = [
  {
    id: uuid(),
    name: "Home",
    url: "/app",
  },
  {
    id: uuid(),
    name: "Search",
    url: "/app/search",
  },
  {
    id: uuid(),
    name: "Saved cases",
    url: "/app/saved",
  },
];

interface AppNavProps {
  hasSaveButton?: boolean;
}

const AppNav: React.FC<AppNavProps> = ({ hasSaveButton }) => {
  const firebase = useFirebase();

  const [isOpen, toggleMenu] = useState(false);

  const handleClick = () => toggleMenu(!isOpen);

  const signOut = async () => {
    if (firebase) {
      try {
        await firebase.auth().signOut();

        if (typeof window !== `undefined`) {
          window.localStorage.removeItem("user");
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Nav>
      <Wrap>
        <div>
          {isOpen ? (
            <CloseIcon onClick={handleClick} size={30} />
          ) : (
            <MenuIcon onClick={handleClick} size={30} />
          )}
        </div>
        <Brand to="/app">Juristrove</Brand>
        <NavItems>
          {LINKS.map(({ id, name, url }) => (
            <NavItem key={id}>
              <Link to={url} activeClassName="active">
                {name}
              </Link>
            </NavItem>
          ))}
        </NavItems>

        <MobileNav isOpen={isOpen}>
          {LINKS.map(({ id, name, url }) => (
            <NavItem key={id}>
              <Link to={url} activeClassName="active">
                {name}
              </Link>
            </NavItem>
          ))}
        </MobileNav>
        {hasSaveButton && (
          <SaveButton>
            <BookmarkIcon size={24} />
            <span>Save case</span>
          </SaveButton>
        )}
        <Button onClick={signOut}>Log out</Button>
      </Wrap>
    </Nav>
  );
};

export default AppNav;
