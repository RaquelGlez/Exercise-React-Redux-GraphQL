import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyD3EDgmrn20MA3odDoPgp1iE9RcyHmLNwU",
    authDomain: "registro-visitas.firebaseapp.com",
    databaseURL: "https://registro-visitas.firebaseio.com",
    projectId: "registro-visitas",
    storageBucket: "registro-visitas.appspot.com",
    messagingSenderId: "818179762085",
    appId: "1:818179762085:web:50c1895600e0361506ea4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs')

export function getFavs(uid) {
    return db.doc(uid).get()
        .then(snap => {
            return snap.data().array
        })
}

export function updateDB(array, uid) {
    return db.doc(uid).set({ favoritos: [...array] })
}

// db.doc(uid).set({ array })

export function signOutGoogle() {
    firebase.auth().signOut()
}

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}

