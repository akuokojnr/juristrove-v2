import React from "react";
import { ThemeProvider } from "styled-components";

import AppNav from "components/AppNav";
import AppFooter from "components/Footer";

import theme from "utils/theme";

interface LayoutProps {
  isApp?: boolean;
  hasSaveButton?: boolean;
  caseMeta?: {
    title: string;
    url: string;
  };
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  isApp,
  hasSaveButton,
  caseMeta,
  children,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          {isApp ? (
            <>
              <AppNav hasSaveButton={hasSaveButton} caseMeta={caseMeta} />
              {children}
              <AppFooter />
            </>
          ) : (
            children
          )}
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
