import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyChaJPMJmlAaXu-V33lWJDMTcbcFttSl58",
  authDomain: "novaerp-1b73c.firebaseapp.com",
  projectId: "novaerp-1b73c",
  storageBucket: "novaerp-1b73c.appspot.com",
  messagingSenderId: "906446515136",
  appId: "1:906446515136:web:0fc7a96803365919963625"
}
!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

    onChange(normalizedUser)
  })
}

export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}