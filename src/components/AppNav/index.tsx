import React, { useState } from "react";
import { Link, navigate } from "gatsby";
import uuid from "uuid/v4";
import { QueryDocumentSnapshot } from "react-firebase-hooks";

import useFirebase from "utils/hooks/useFirebase";
import getUserId from "utils/hooks/useFirebase/getUserId";

import { BookmarkStar as BookmarkIcon } from "@styled-icons/boxicons-solid/BookmarkStar";

import {
  Wrap,
  Nav,
  NavItems,
  MobileNav,
  NavItem,
  Brand,
  Button,
  Save,
  Saved,
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
  caseMeta: QueryDocumentSnapshot<{
    originalId: string;
    title: string;
    slug: string;
  }>;
  caseIsSaved: boolean;
  checkingSaveStatus: boolean;
  setSaveStatus: (val: boolean) => void;
}

const AppNav: React.FC<AppNavProps> = ({
  hasSaveButton,
  caseMeta,
  caseIsSaved,
  checkingSaveStatus,
  setSaveStatus,
}) => {
  const [isOpen, toggleMenu] = useState<boolean>(false);

  const handleClick = () => toggleMenu(!isOpen);

  const firebase = useFirebase();
  const userId = getUserId();

  let file = {
    title: caseMeta?.title,
    slug: caseMeta?.slug,
    timestamp: Date.now(),
  };

  const saveCase = async () => {
    try {
      await firebase
        ?.firestore()
        .collection(`users/${userId}/savedCases`)
        .doc(file.title)
        .set(file);

      setSaveStatus(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeCase = async () => {
    try {
      await firebase
        ?.firestore()
        .collection(`users/${userId}/savedCases`)
        .doc(file.title)
        .delete();

      setSaveStatus(false);
    } catch (err) {
      console.log(err.message);
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
    <>
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
            <>
              {!checkingSaveStatus && (
                <>
                  {caseIsSaved ? (
                    <Saved onClick={removeCase}>
                      <BookmarkIcon size={24} />
                      <span>Saved</span>
                    </Saved>
                  ) : (
                    <Save onClick={saveCase}>
                      <BookmarkIcon size={24} />
                      <span>Save</span>
                    </Save>
                  )}
                </>
              )}
            </>
          )}
          <Button onClick={signOut}>Log out</Button>
        </Wrap>
      </Nav>
    </>
  );
};

export default AppNav;
