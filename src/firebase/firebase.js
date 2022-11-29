// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from "firebase/auth";
import {useEffect, useState} from "react";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRiREHGhEYAwXOveqOtl5IsYllEf1W_Ac",
    authDomain: "example-8679f.firebaseapp.com",
    projectId: "example-8679f",
    storageBucket: "example-8679f.appspot.com",
    messagingSenderId: "611316349387",
    appId: "1:611316349387:web:89f1008d51bc8d5f39de4e",
    measurementId: "G-VWWZJS4MXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export function signup(email,pass) {
   return  createUserWithEmailAndPassword(auth,email,pass)
}
export function signin(email,pass) {
   return  signInWithEmailAndPassword(auth,email,pass)
}
export function useAuth() {
   const [currentUser,setCurrentUser]=useState();
   useEffect(()=>{
     return   onAuthStateChanged(auth,user=>setCurrentUser(user))
   },[])
   return currentUser;
}
export function logoutt() {
    return signOut(auth)
}