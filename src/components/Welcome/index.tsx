import React from "react";
import uuid from "uuid/v4";

import { Blurb, ActivityWrap, NoData } from "./styles";

interface WelcomeProps {
  username: string;
  data: Array<{
    title: string;
    url: string;
    createdAt: string;
  }>;
}

const Welcome: React.FC<WelcomeProps> = ({ username, data }) => (
  <>
    <Blurb>
      <h3>Hello {username}!</h3>
      <p>Welcome back to Juristrove.</p>
    </Blurb>
    <ActivityWrap>
      <p>Recent</p>
      {data && data.length > 0 ? (
        <ul>
          {data.map(({ title, url, createdAt }) => (
            <li key={uuid()}>
              <a href={url}>
                {title}
                <span>{createdAt}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <NoData>Your recently read cases will appear here.</NoData>
      )}
    </ActivityWrap>
  </>
);

export default Welcome;
