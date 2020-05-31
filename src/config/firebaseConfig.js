import firebase, { database, firestore, storage, auth } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq0wr4SrIWHdqzMbR0vwVPT9RvF_gFBZw",
  authDomain: "my-app-92f7a.firebaseapp.com",
  databaseURL: "https://my-app-92f7a.firebaseio.com",
  projectId: "my-app-92f7a",
  storageBucket: "my-app-92f7a.appspot.com",
  messagingSenderId: "285908645596",
  appId: "1:285908645596:web:9b65918f2081d0a2092619",
  measurementId: "G-1N624LCY2K",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const fDatabase = database()
export const fstore = firestore()
export const fstorage = storage()
export const fauth = auth()
