
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDqHdY58tiydg9wADjuwbZW3Dx4lYppt8w",
  authDomain: "entrega-final-reactjs-a98f4.firebaseapp.com",
  projectId: "entrega-final-reactjs-a98f4",
  storageBucket: "entrega-final-reactjs-a98f4.firebasestorage.app",
  messagingSenderId: "651844202394",
  appId: "1:651844202394:web:cf38453c5711e7bbf8d423"
};


initializeApp(firebaseConfig);

const db = getFirestore()

export default db


//ESTE SE LLAMA ENTREGA-FINAL-REACTJS