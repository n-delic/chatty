import auth from "@/modules/auth";
import db from "@/modules/db";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";

const useAuth = () => {
  try {
    const register = async (
      username: string,
      email: string,
      password: string
    ) => {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(db, "users"), {
        id: user.user.uid,
        email,
        username,
      });
      console.log(docRef);
    };

    return { register };
  } catch (e) {
    console.error("error adding document", e);
  }
};

export default useAuth;
