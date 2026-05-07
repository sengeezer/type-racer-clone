import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
};

const requiredFirebaseConfig = [
  firebaseConfig.apiKey,
  firebaseConfig.authDomain,
  firebaseConfig.projectId,
  firebaseConfig.appId,
];

const isValidConfigValue = (value: string | undefined) =>
  Boolean(value && !value.startsWith("<YOUR_"));

export const isFirebaseConfigured = requiredFirebaseConfig.every(isValidConfigValue);

export const getFirebaseApp = () => {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase environment variables are not configured.");
  }

  if (!firebase.apps.length) {
    try {
      firebase.initializeApp(firebaseConfig);
    } catch (err) {
      if (!(err instanceof Error) || !/already exists/.test(err.message)) {
        console.error("Firebase initialization error", err);
        throw err;
      }
    }
  }
  return firebase.app();
};

export const getFirebaseAuth = () => {
  getFirebaseApp();
  return firebase.auth();
};

export const getFirestore = () => {
  getFirebaseApp();
  return firebase.firestore();
};

export default firebase;
