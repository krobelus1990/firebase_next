import { deleteDoc, doc } from "firebase/firestore";
import { db } from "./config";


export default async function deleteUser(id: string) {
    const docRef = doc(db, "users", id);
    await deleteDoc(docRef);
    window.location.reload();
}