import React from "react";

import { Wrap } from "./styles";

interface WelcomeProps {
  username: string;
}

const Welcome: React.FC<WelcomeProps> = ({ username }) => (
  <Wrap>
    <h3>Hello {username}!</h3>
    <p>Welcome back to Juristrove.</p>
  </Wrap>
);

export default Welcome;
