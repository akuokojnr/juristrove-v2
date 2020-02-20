import { useEffect, useState } from "react";

import getFirebase from "./firebase";

export default function() {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    setInstance(getFirebase());
  }, []);

  return instance;
}
