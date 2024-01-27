import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7qwWyB2yQVPMWBNFZCuXsayRGCGsyZdQ",
  authDomain: "juan-blog-62a99.firebaseapp.com",
  projectId: "juan-blog-62a99",
  storageBucket: "juan-blog-62a99.appspot.com",
  messagingSenderId: "286911110888",
  appId: "1:286911110888:web:2ac702ec8ff048c083f35d"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}