import React from "react";
import { ThemeProvider } from "styled-components";

import AppNav from "components/AppNav";
import AppFooter from "components/Footer";

import theme from "utils/theme";

interface LayoutProps {
  isApp?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isApp, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {isApp && <AppNav />}
        {children}
        {isApp && <AppFooter />}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
