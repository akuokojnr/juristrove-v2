import React from "react";

import AppNav from "components/AppNav";
import AppFooter from "components/Footer";

interface AppLayoutProps {
  hasSaveButton?: boolean;
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ hasSaveButton, children }) => {
  return (
    <main>
      <AppNav hasSaveButton={hasSaveButton} />
      {children}
      <AppFooter />
    </main>
  );
};

export default AppLayout;
