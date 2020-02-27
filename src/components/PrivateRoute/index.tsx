import React from "react";
import { navigate } from "gatsby";

interface PrivateRouteProps {
  component: React.ReactNode;
  path: string;
  location?: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  location,
  ...rest
}) => {
  const user = localStorage.getItem("User");

  if (!user && location.pathname !== "/") {
    navigate("/", { replace: true });
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
