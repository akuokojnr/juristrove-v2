import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DATABASE_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_APP_ID,
  measurementId: process.env.GATSBY_MEASUREMENT_ID,
};

let firebaseInstance: firebase.app.App | null = null;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (firebaseInstance) {
      return firebaseInstance;
    }

    firebaseInstance = firebase.initializeApp(firebaseConfig);
    return firebaseInstance;
  }

  return;
}
