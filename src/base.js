import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDYCOVwZgTY23xFd-lwk4j_m7QGuH948CI",
  authDomain: "fishmart-rk.firebaseapp.com",
  databaseURL: "https://fishmart-rk.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
