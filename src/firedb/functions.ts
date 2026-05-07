import { getFirebaseAuth } from "./config";

interface LoginProps {
  email: string;
  password: string;
}

interface RegisterProps extends LoginProps {
  name: string;
}

export const login = async ({ email, password }: LoginProps) =>
  await getFirebaseAuth().signInWithEmailAndPassword(email, password);

export const register = async ({ email, password, name }: RegisterProps) => {
  const auth = getFirebaseAuth();
  await auth.createUserWithEmailAndPassword(email, password);
  await auth.currentUser?.updateProfile({ displayName: name });
};

export const loguot = async () => await getFirebaseAuth().signOut();

// export const addStatsWps = async (userId: string, wps: number) => {
//   const res =
// }
