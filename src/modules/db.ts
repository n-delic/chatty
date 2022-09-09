import {getFirestore} from 'firebase/firestore';
import app from './fireBaseApp';

const db = getFirestore(app);
export default db;