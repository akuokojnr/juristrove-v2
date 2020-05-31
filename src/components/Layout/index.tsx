import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryDocumentSnapshot } from "react-firebase-hooks";

import AppNav from "components/AppNav";
import AppFooter from "components/Footer";

import theme from "utils/theme";

interface LayoutProps {
  isApp?: boolean;
  hasSaveButton?: boolean;
  caseMeta: QueryDocumentSnapshot<{
    title: string;
    slug: string;
  }>;
  caseIsSaved: boolean;
  checkingSaveStatus: boolean;
  setSaveStatus: (val: boolean) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  isApp,
  hasSaveButton,
  caseMeta,
  caseIsSaved,
  checkingSaveStatus,
  setSaveStatus,
  children,
}) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          {isApp ? (
            <>
              <AppNav
                hasSaveButton={hasSaveButton}
                caseMeta={caseMeta}
                caseIsSaved={caseIsSaved}
                checkingSaveStatus={checkingSaveStatus}
                setSaveStatus={setSaveStatus}
              />
              {children}
              <AppFooter />
            </>
          ) : (
            <>{children}</>
          )}
        </main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
