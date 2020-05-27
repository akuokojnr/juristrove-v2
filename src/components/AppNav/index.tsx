import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import uuid from "uuid/v4";
import delve from "dlv";

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
];

interface AppNavProps {
  hasSaveButton?: boolean;
  caseMeta?: {
    title: string;
    slug: string;
  };
}

const AppNav: React.FC<AppNavProps> = ({ hasSaveButton, caseMeta }) => {
  const [isOpen, toggleMenu] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    message: string;
  }>();

  const handleClick = () => toggleMenu(!isOpen);

  const firebase = useFirebase();

  let user;

  if (typeof window !== `undefined`) {
    user = JSON.parse(window.localStorage.getItem("user"));
  }

  const userId = delve(user, "uid") && user.uid;

  const saveCase = async () => {
    const { title, slug } = caseMeta;

    let file = {
      title,
      slug,
      timestamp: Date.now(),
    };

    try {
      await firebase
        ?.firestore()
        .collection(`users/${userId}/savedCases`)
        .add(file);

      setMessage({
        type: "success",
        message: "Your case has been saved successfully.",
      });
    } catch (err) {
      setMessage({ type: "error", message: err.message });
    }
  };

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
          <SaveButton onClick={saveCase}>
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
