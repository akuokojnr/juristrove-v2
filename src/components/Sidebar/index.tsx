import React, { useState } from "react";
import { Link } from "gatsby";
import uuid from "uuid/v4";

import {
  Wrap,
  Nav,
  NavItems,
  NavItem,
  Brand,
  MenuIcon,
  CloseIcon,
} from "./styles";

const LINKS = [
  {
    id: uuid(),
    name: "Home",
    url: "/home",
  },
  {
    id: uuid(),
    name: "Search",
    url: "/search",
  },
  {
    id: uuid(),
    name: "Saved cases",
    url: "/saved-cases",
  },
];

const Sidebar = () => {
  const [isOpen, toggleMenu] = useState(false);

  const handleClick = () => toggleMenu(!isOpen);

  return (
    <Wrap isOpen={isOpen}>
      <Nav isOpen={isOpen}>
        <div>
          {isOpen ? (
            <CloseIcon onClick={handleClick} />
          ) : (
            <MenuIcon onClick={handleClick} />
          )}
        </div>
        <NavItems isOpen={isOpen}>
          <Brand>
            <Link to="/">Juristrove</Link>
          </Brand>
          {LINKS.map(({ id, name, url }) => (
            <NavItem key={id}>
              <Link to={url}>{name}</Link>
            </NavItem>
          ))}
          <NavItem>Log out</NavItem>
        </NavItems>
      </Nav>
    </Wrap>
  );
};

export default Sidebar;
