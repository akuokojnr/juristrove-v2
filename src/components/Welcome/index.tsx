import React from "react";
import { QueryDocumentSnapshot } from "react-firebase-hooks";

import uuid from "uuid/v4";

import { Content, NoData } from "./styles";

interface WelcomeProps {
  data:
    | QueryDocumentSnapshot<{
        title: string;
        url: string;
        createdAt: string;
      }>
    | undefined;
}

const Welcome: React.FC<WelcomeProps> = ({ data }) => {
  if (!data || !data.length) {
    return <NoData>Your recently read cases will appear here.</NoData>;
  }

  return (
    <Content>
      {data.map(({ title, url, createdAt }) => (
        <li key={uuid()}>
          <a href={url}>
            {title}
            <span>{createdAt}</span>
          </a>
        </li>
      ))}
    </Content>
  );
};

export default Welcome;
