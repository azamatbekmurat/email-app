import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCcb2OjgT9KR6aWi8TY9IpwsKZmcv44ovA",
  authDomain: "clone-c614c.firebaseapp.com",
  projectId: "clone-c614c",
  storageBucket: "clone-c614c.appspot.com",
  messagingSenderId: "101915654205",
  appId: "1:101915654205:web:2ff007287c1bc788f2d254",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
