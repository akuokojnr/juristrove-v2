import React from "react";

import { Blurb } from "./styles";

interface WelcomeProps {
  username: string;
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => (
  <>
    <Blurb>
      <h3>Hello {username}!</h3>
      <p>Welcome back to Juristrove.</p>
    </Blurb>
  </>
);

export default Welcome;
