import { navigate } from "gatsby";

const isAuthenticated = () => {
  const user = localStorage.getItem("User");

  if (!user) {
    navigate("/", { replace: true });
  }
};

export default isAuthenticated;
