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

export const createUserProfileDocuent = async(userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user ', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;