import React from "react";
import { Router } from "@reach/router";

import PrivateRoute from "components/PrivateRoute";
import Dashboard from "components/Dashboard";
import SearchPage from "components/SearchPage";

const App: React.FC = () => {
  return (
    <>
      <Router basepath="/app">
        <PrivateRoute path="/" component={Dashboard} />
        <PrivateRoute path="/search" component={SearchPage} />
      </Router>
    </>
  );
};

export default App;
