import app from "./fireBaseApp";
import {getAuth} from 'firebase/auth';

const auth = getAuth(app);
export default auth;
