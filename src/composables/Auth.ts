import auth from "@/modules/auth";
import db from "@/modules/db";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";
import { ref } from "vue";

const errMsg = ref("");

const useAuth = () => {
  const register = async (
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      const docRef = await addDoc(collection(db, "users"), {
        id: user.user.uid,
        email,
        username,
      });

      return true;
    } catch (e: any) {
      errMsg.value = e.code;
      console.error("error adding document", e.code);
    }
  };

  return { register, errMsg };
};

export default useAuth;
