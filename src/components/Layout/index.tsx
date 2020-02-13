import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "utils/theme";

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  );
};

export default Layout;
