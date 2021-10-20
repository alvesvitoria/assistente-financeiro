// Add the Firebase products that you want to use
import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBTkMGD5wG_x1Kl0hgf2W0KVoYz4LzQmPU",
    authDomain: "teclearn-app-9dad5.firebaseapp.com",
    projectId: "teclearn-app-9dad5",
    storageBucket: "teclearn-app-9dad5.appspot.com",
    messagingSenderId: "444386548992",
    appId: "1:444386548992:web:4aa99bd8aac9cb3a1ee7e5",
    measurementId: "G-BLK8K7BYBX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;