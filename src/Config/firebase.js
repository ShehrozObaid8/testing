import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import Swal from "sweetalert2";

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
const db = getFirestore(app);
const storage = getStorage(app);




const signupUser = async (email, password, userName, number) => {
    // console.log(email,password)
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const docRef = await addDoc(collection(db, "users"), {
            name: userName,
            Email: email,
            phoneNumber: number,
        }
        )
        console.log(docRef)

        Swal.fire("Successfully Sign up")
    }
    catch (e) {
        Swal.fire(e.message)
    }
}



const signinUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Swal.fire("Successfully Sign in")

        })
        .catch((e) => {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            Swal.fire(e.message)
        });
}

const PostAd = async (title, description, price, file) => {

    try {
        const url = await uploadImage(file)
        const data = { title, description, price: +price, imageUrl: url }
        const docRef = await addDoc(collection(db, "ads"), data)

        Swal.fire('ad posted successfully')

    }

    catch (e) {
        Swal.fire(e.message)
    }

}

const uploadImage = async (file) => {
    const storageRef = ref(storage, 'ads/' + file.name);
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    return url
}

export {
    signupUser,
    signinUser,
    PostAd,
    getAuth,
     app
}