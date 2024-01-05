import { getDocs, collection } from "firebase/firestore";
import { db } from "./config";

export default async function getPostDocument() {
  const postId: any[] = [];
  const coll = collection(db, "post");
  const result = getDocs(coll);
  (await result).forEach((post) => postId.push(post.id));

  return postId;
}
