// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvWXgHg4xgDCA1mDB0ZGOWrV3NzzmZOlg",
  authDomain: "dealer-a9b99.firebaseapp.com",
  projectId: "dealer-a9b99",
  storageBucket: "dealer-a9b99.appspot.com",
  messagingSenderId: "847326944184",
  appId: "1:847326944184:web:9adb9a80ade88571204d4d",
  measurementId: "G-0VLXJVPRHV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const analytics = getAnalytics(app);

export default app;