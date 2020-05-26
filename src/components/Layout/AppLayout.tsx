import React from "react";

import AppNav from "components/AppNav";
import AppFooter from "components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <main>
      <AppNav />
      {children}
      <AppFooter />
    </main>
  );
};

export default AppLayout;
