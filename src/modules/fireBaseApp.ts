import {initializeApp} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBnCoaWz8D8L3WjtcUNiPt197ZoQG17fSs",
    authDomain: "firechat-a0bda.firebaseapp.com",
    databaseURL: "https://firechat-a0bda-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "firechat-a0bda",
    storageBucket: "firechat-a0bda.appspot.com",
    messagingSenderId: "278159785370",
    appId: "1:278159785370:web:548f5ba910b0cce9070e23",
    measurementId: "G-0VEBN6WY4W"
}

const app = initializeApp(firebaseConfig);
export default app;