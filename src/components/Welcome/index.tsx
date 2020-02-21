import React from "react";
import uuid from "uuid/v4";

import { Blurb, ActivityWrap } from "./styles";

interface WelcomeProps {
  username: string;
  data: Array<{
    title: string;
    path: string;
    timestamp: string;
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
      {data ? (
        <ul>
          {data.map(({ title, path, timestamp }) => (
            <li key={uuid()}>
              <a href={path}>
                {title}
                <span>{timestamp}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <span>You have no read any case yet.</span>
      )}
    </ActivityWrap>
  </>
);

export default Welcome;
