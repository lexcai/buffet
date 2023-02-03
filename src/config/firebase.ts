import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import config from "./config";

const Firebase = firebase.initializeApp(config.firebase);

// export const Providers = {
//   google: new firebase.auth.GoogleAuthProvider();
// }

export const auth = Firebase.auth();
export const db = Firebase.firestore();
export const clientRef = db.collection("client");

export default Firebase;
