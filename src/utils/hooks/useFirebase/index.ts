import { useEffect, useState, createContext } from "react";
import { app } from "firebase/app";

import getFirebase from "./firebase";

export default function() {
  const [instance, setInstance] = useState<app.App | null>();

  useEffect(() => {
    setInstance(getFirebase());
  }, []);

  return instance;
}

export const UserContext = createContext(null);
