import React from "react";
import { ThemeProvider } from "styled-components";

import Sidebar from "components/Sidebar";

import theme from "utils/theme";

interface LayoutProps {
  isApp?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ isApp, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {isApp && <Sidebar />}
        {children}
      </main>
    </ThemeProvider>
  );
};

export default Layout;
