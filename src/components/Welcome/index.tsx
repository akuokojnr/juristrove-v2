import React from "react";
import { Link } from "gatsby";
import { QueryDocumentSnapshot } from "react-firebase-hooks";

import uuid from "uuid/v4";

import { Content, NoData } from "./styles";

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
        const { url, title, timestamp } = item.data();

        return (
          <li key={uuid()}>
            <Link to={url}>
              {title}
              <span>{timestamp}</span>
            </Link>
          </li>
        );
      })}
    </Content>
  );
};

export default Welcome;
