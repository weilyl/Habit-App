import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_ZiHqJh2c_VASL9Ms1y7KVQQ9X-RVTgk",
  authDomain: "habit-app-bc41f.firebaseapp.com",
  projectId: "habit-app-bc41f",
  storageBucket: "habit-app-bc41f.appspot.com",
  messagingSenderId: "532066439855",
  appId: "1:532066439855:web:69c10ddbcb82cd71c1fa5a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}