import React from "react";

import { Blurb, ActivityWrap } from "./styles";

interface WelcomeProps {
  username: string;
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => (
  <>
    <Blurb>
      <h3>Hello {username}!</h3>
      <p>Welcome back to Juristrove.</p>
    </Blurb>
    <ActivityWrap>
      <p>Activity summary</p>
      <ul>
        <li>
          <a href="#">
            Re Akoto & 7 Others
            <span>10 hours ago</span>
          </a>
        </li>
        <li>
          <a href="#">
            Prof. Stephen Kwaku Asare v Attorney General
            <span>Yesterday</span>
          </a>
        </li>
        <li>
          <a href="#">
            Merritt v Merritt
            <span>Last week</span>
          </a>
        </li>
      </ul>
    </ActivityWrap>
  </>
);

export default Welcome;
