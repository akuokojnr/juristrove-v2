import React from "react";
import { Link } from "gatsby";
import JavascriptTimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import { QueryDocumentSnapshot } from "react-firebase-hooks";
import uuid from "uuid/v4";

import useFirebase from "utils/hooks/useFirebase";
import getUserId from "utils/hooks/useFirebase/getUserId";

import { Content, LinkText, NoData, SavedButton, LinkTitle } from "./styles";

import en from "javascript-time-ago/locale/en";

import { BookmarkStar as BookmarkIcon } from "@styled-icons/boxicons-solid/BookmarkStar";

JavascriptTimeAgo.locale(en);

interface SavedCasesProps {
  data:
    | QueryDocumentSnapshot<{
        title: string;
        url: string;
        timestamp: number;
      }>
    | undefined;
}

const SavedCases: React.FC<SavedCasesProps> = ({ data }) => {
  const firebase = useFirebase();
  const userId = getUserId();

  const removeCase = async (title: string) => {
    try {
      await firebase
        ?.firestore()
        .collection(`users/${userId}/savedCases`)
        .doc(title)
        .delete();
    } catch (err) {
      console.log(err.message);
    }
  };

  if (!data || !data.length) {
    return (
      <NoData>
        When you save cases, they’ll show up here for easy access.
      </NoData>
    );
  }

  return (
    <Content>
      {data.map(item => {
        const { slug, title, timestamp } = item.data();

        return (
          <li key={uuid()}>
            <Link to={slug}>
              <LinkText>
                <LinkTitle>{title}</LinkTitle>
                <span>
                  <ReactTimeAgo date={timestamp} />
                </span>
              </LinkText>
            </Link>

            <SavedButton onClick={() => removeCase(title)}>
              {/* <BookmarkIcon size={24} /> */}
              <span>Remove</span>
            </SavedButton>
          </li>
        );
      })}
    </Content>
  );
};

export default SavedCases;
