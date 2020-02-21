import React, { useState } from "react";
import { Link } from "gatsby";
import uuid from "uuid/v4";

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
    url: "/search",
  },
  {
    id: uuid(),
    name: "Saved cases",
    url: "/saved",
  },
];

const Sidebar = () => {
  const [isOpen, toggleMenu] = useState(false);

  const handleClick = () => toggleMenu(!isOpen);

  return (
    <Nav>
      <Wrap>
        <div>
          {isOpen ? (
            <CloseIcon onClick={handleClick} />
          ) : (
            <MenuIcon onClick={handleClick} />
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

        <Button>Log out</Button>
      </Wrap>
    </Nav>
  );
};

export default Sidebar;
