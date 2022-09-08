import auth from "@/modules/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";


const useAuth = () => {
    const register = (email: string, password: string) => {
       return createUserWithEmailAndPassword(auth,email,password);
    }
    
    return {register}
}

export default useAuth;