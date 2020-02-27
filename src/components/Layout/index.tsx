import React from "react";
import { ThemeProvider } from "styled-components";

import AppLayout from "./AppLayout";

import theme from "utils/theme";

interface LayoutProps {
  isApp?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isApp, children }) => {
  return (
    <ThemeProvider theme={theme}>
      {isApp ? <AppLayout children={children} /> : <main>{children}</main>}
    </ThemeProvider>
  );
};

export default Layout;
