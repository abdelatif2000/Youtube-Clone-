import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBQcBA7-vhvVynEWC6pRpB2sBG6PbGVHro",
    authDomain: "abdelatifbenicou.firebaseapp.com",
    projectId: "abdelatifbenicou",
    storageBucket: "abdelatifbenicou.appspot.com",
    messagingSenderId: "256388501625",
    appId: "1:256388501625:web:09a244bbdb83caade604a8"
};
firebase.initializeApp(firebaseConfig);
export default  firebase.auth();