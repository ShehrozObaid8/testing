import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyB8YLuyfc6oQ4NzsXPVnH_SSEYPnRNkkgI",
    authDomain: "olx--01.firebaseapp.com",
    projectId: "olx--01",
    storageBucket: "olx--01.appspot.com",
    messagingSenderId: "222916211799",
    appId: "1:222916211799:web:b9c212943608f1ca055f12"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




const signupUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    // console.log(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Successfully Logged in")
        })
        .catch((e) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            alert(e.message)
            // ..
        })
};


export {
    signupUser
}