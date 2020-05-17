import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import uuid from "uuid/v4";

import useFirebase from "utils/hooks/useFirebase";

import {
  Wrap,
  Nav,
  NavItems,
  MobileNav,
  NavItem,
  Brand,
  Button,
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

const Sidebar = () => {
  const firebase = useFirebase();

  const [isOpen, toggleMenu] = useState(false);

  const handleClick = () => toggleMenu(!isOpen);

  const signOut = async () => {
    if (firebase) {
      try {
        await firebase.auth().signOut();

        if (typeof window !== `undefined`) {
          window.localStorage.removeItem("User");
          navigate("/", { replace: true });
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

        <Button onClick={signOut}>Log out</Button>
      </Wrap>
    </Nav>
  );
};

export default Sidebar;
