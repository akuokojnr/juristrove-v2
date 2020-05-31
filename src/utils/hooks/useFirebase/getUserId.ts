import delve from "dlv";

export default function getUserId() {
  let user;

  if (typeof window !== `undefined`) {
    user = JSON.parse(window.localStorage.getItem("user"));
  }

  const userId = delve(user, "uid") && user.uid;
  return userId;
}
