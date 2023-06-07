import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOBtt12c2q2ZhtDPYcPRewrAnw9rNUsdA",
  authDomain: "spotify-clone-3ed04.firebaseapp.com",
  projectId: "spotify-clone-3ed04",
  storageBucket: "spotify-clone-3ed04.appspot.com",
  messagingSenderId: "299655556738",
  appId: "1:299655556738:web:4594318a55e4269dbf4e9b",
  measurementId: "G-1E3JJSZY66"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();

export default app;