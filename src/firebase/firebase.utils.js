import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBBOmk-ykPrGdxxFKiLYpxl5zl6T2sengQ",
    authDomain: "crown-clothing-7768c.firebaseapp.com",
    projectId: "crown-clothing-7768c",
    storageBucket: "crown-clothing-7768c.appspot.com",
    messagingSenderId: "97546966388",
    appId: "1:97546966388:web:f09eeabb3b67f81ca1c821"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;