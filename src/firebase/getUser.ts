import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";


export default async function getUser(id: string) {
  const docRef = doc(db, "users", id);
  const result = await getDoc(docRef);
  return result.data();
}