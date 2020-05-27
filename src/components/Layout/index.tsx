import React from "react";
import { ThemeProvider } from "styled-components";

import AppLayout from "./AppLayout";

import theme from "utils/theme";

interface LayoutProps {
  isApp?: boolean;
  hasSaveButton?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isApp, hasSaveButton, children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        {isApp ? (
          <AppLayout children={children} hasSaveButton={hasSaveButton} />
        ) : (
          <main>{children}</main>
        )}
      </ThemeProvider>
    </>
  );
};

export default Layout;
