// Conveniently import this file anywhere to use db

import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUhl-Ov1WClY54qFxKEcFLX1fi9ekK7ZY",
    authDomain: "tiendacellphone-vue.firebaseapp.com",
    projectId: "tiendacellphone-vue",
    storageBucket: "tiendacellphone-vue.appspot.com",
    messagingSenderId: "793440322650",
    appId: "1:793440322650:web:dc33586412fd093d7e0463",
    measurementId: "G-EKZ2JMKQL7"
  };

export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()


// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
