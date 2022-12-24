// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import {collection,addDoc,updateDoc,deleteDoc,doc,query,onSnapshot} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC7Md5LQ5NzA0u7wfiWWBMXknF8D-hh2k",
    authDomain: "mp-community-adaeb.firebaseapp.com",
    projectId: "mp-community-adaeb",
    storageBucket: "mp-community-adaeb.appspot.com",
    messagingSenderId: "669584352394",
    appId: "1:669584352394:web:6fca04c6075a6f43edf973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)

// export const getData = async (collectionName) => {
//     const q = query(collection(db, collectionName));
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//         const data = [];
//         querySnapshot.forEach((doc) => {
//         data.push({id:doc.id, ...doc.data()});
//         return data;
//     })
// })}

export const createDocument = async (collectionName,data) => {
    const colRef = collection(db, collectionName)
    await addDoc(colRef, { ...data });
};

export const deleteDocument = async (collectionName,id) => {
    const userDoc = doc(db, collectionName, id);
    await deleteDoc(userDoc);
};

export const updateDocument = async (collectionName,id,newValue) => {
    const userDoc = doc(db, collectionName, id);
    await updateDoc(userDoc, newValue);
};