import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { deleteDoc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import { query, where } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCLILHxZohEFWvgNvclol0a9Lh2LKogcG8",
  authDomain: "hackathon-project-3fba2.firebaseapp.com",
  projectId: "hackathon-project-3fba2",
  storageBucket: "hackathon-project-3fba2.appspot.com",
  messagingSenderId: "756048614093",
  appId: "1:756048614093:web:578a51e4674dcbfd91cf84",
  measurementId: "G-8020H78KHC"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth();

async function AddUser(email, password, fullName, image) {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      addUserDetail(user.uid, fullName, user.email, image);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

async function addUserDetail(uid, fullName, email, image) {
  const url = await sendFile(image);
  const docRef = await addDoc(collection(db, "users"), {
    uid,
    displayName: fullName,
    email,
    imageURL: url,
  });
}

async function addBlogPost(text, name, file) {
  const url = await sendFile(file);
  const docRef = await addDoc(collection(db, "post"), {
    message: text,
    profileName: name,
    feedImage: url,
  });
}

async function getPost() {
  const list = [];
  const querySnapshot = await getDocs(collection(db, "post"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    list.push(doc.data());
  });
  return list;
}

function LoginWithUSer(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

async function sendFile(file) {
  try {
    const imagesRef = ref(storage, "images/" + file.name);
    await uploadBytes(imagesRef, file);
    const url = getDownloadURL(imagesRef);
    return url;
  } catch (e) {
    alert(e.message);
  }
}

async function getUsers() {
  const list = [];
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    list.push(doc.data());
  });
  return list;
}



async function getSigleUserDetail(uid) {
  const q = query(collection(db, "users"), where("uid", "==", true));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
}


export { addBlogPost, getPost, AddUser, LoginWithUSer, getUsers, getSigleUserDetail };
