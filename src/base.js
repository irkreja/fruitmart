import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfo8GM_-FRjeM5QUYPoqipIOFWsHFXiFo",
  authDomain: "fruitmart-react-app.firebaseapp.com",
  databaseURL: "https://fruitmart-react-app.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
