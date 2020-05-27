import React from "react";
import { Link } from "gatsby";
import JavascriptTimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import { QueryDocumentSnapshot } from "react-firebase-hooks";

import uuid from "uuid/v4";

import { Content, NoData } from "./styles";

import en from "javascript-time-ago/locale/en";

JavascriptTimeAgo.locale(en);

interface WelcomeProps {
  data:
    | QueryDocumentSnapshot<{
        title: string;
        url: string;
        timestamp: number;
      }>
    | undefined;
}

const Welcome: React.FC<WelcomeProps> = ({ data }) => {
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
              {title}
              <span>
                <ReactTimeAgo date={timestamp} />
              </span>
            </Link>
          </li>
        );
      })}
    </Content>
  );
};

export default Welcome;
