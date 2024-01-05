import { getDocs, collection } from "firebase/firestore";
import { db } from "./config";

export default async function getUserDocument() {
  const userId: string[] = [];
  const coll = collection(db, "users");
  const result = getDocs(coll);

  (await result).forEach((user) => userId.push(user.id));

  return userId;
}
