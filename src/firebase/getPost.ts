import { doc, getDoc } from "firebase/firestore";
import { db } from "./config";

export default async function getPost(id: string) {
  const docRef = doc(db, "post", id);
  const result:any = await getDoc(docRef);
  return result.data();
}
