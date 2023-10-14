// import { initializeApp } from "firebase/app";
// // import { getAuth } from "firebase/auth";
// import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from "firebase/auth"
// import {addDoc, collection, getFirestore, doc,setDoc} from "firebase/firestore"; 


// const firebaseConfig = {
//     apiKey: "AIzaSyCAngb1W-bmApxUqMofZVpmydvjEnEl7OM",
//     authDomain: "olx-website-d4275.firebaseapp.com",
//     projectId: "olx-website-d4275",
//     storageBucket: "olx-website-d4275.appspot.com",
//     messagingSenderId: "158965184035",
//     appId: "1:158965184035:web:cb2d80ee41c688d63de396"
//   };
  
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig)
//   const db = getFirestore(app);  
//   const auth = getAuth(app);
  
// const signupUser = async(email,password,amUserName,phoneNumber) => {
//   try{ 
//   const res = await createUserWithEmailAndPassword(auth, email,password)
//   const uid = res.user.uid

// // Add a new document in collection "cities"
// const docRef = await setDoc(doc(db,"users",uid), {
//   name: amUserName,
//   Email: email,
//   PhoneNumber:phoneNumber 
// })
// console.log("docRef",docRef)

//   return {
//     status: 200,
//     message : "successful",
//     data : res.user 
// };
//   }

//   catch(e){
//     return {
//       status: 500,
//       message : e.message,
//       data : null 
//     }
//   }
// }
//   //  const docRef = addDoc(collection(db,"users"),{
//   //   Name: amUserName,
//   //   Email: email,
//   //   PhoneNumber: phoneNumber,
//   //  })
//   //  console.log("docRef",docRef)  
       

//   //  return {
//   //   status: 200,
//   //   message : "successful",
//   //   data : res.user 
//   // }
//   // Signed in 
//   // const user = userCredential.user;
//   // alert("user sign up Sucessful")
//   // ...
// // }

//   // catch(e) {
//     // alert(e.message)
//     // ..
//     // return {
//     //   status: 500,
//     //   message : e.message,
//     //   data : null 
//     //  }
//   // };
// // }





// const signinUser = async(email,password) => {
//  const res = await signInWithEmailAndPassword(auth, email, password)
//     try{
//       // alert(res.message)

//       return {
//         status: 200,
//         message : "successful",
//         data : res.user 
//     };
//     }
    
//     catch(e) {
//     // alert(res.message)
    
//     return {
//       status: 500,
//       message : e.message,
//       data : null 
//     }
//   }
// };
    

//   // }
  
// // }






// // const db = getFirestore(app);


// // const SignupUser = async (email,username,phoneNumber) =>{
// //   console.log("SignupUser sign up ka firebase",SignupUser)
// // try {
// //   const dec = await createUserWithEmailAndPassword (auth,email,username)
// //   const docRef = await addDoc(collection(db, "Users"), {

// //     name: username,
// //     email: email,
// //     phonenumber: phoneNumber
// //   })
// //   console.log("try chala ",docRef);


// //     return{
// //     status: 200,
// //     message: "success",
// //     data : dec.user,
// //   }
// //   // );
// // }
  

// // catch (e) {
// //   return{
// //     status: 500,
// //     message: e.message,
// //     data : null,
// //   }
// // }
  
// // }






// export{
//   signupUser,
//   // SignupUser
//   signinUser,
//   // auth
// }