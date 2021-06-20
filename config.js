import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBqqNUw9lzgemYHorA2_MyKscWKlYLDQpw",
    authDomain: "wily-94e47.firebaseapp.com",
    projectId: "wily-94e47",
    storageBucket: "wily-94e47.appspot.com",
    messagingSenderId: "849818261311",
    appId: "1:849818261311:web:542f704cd575444f10658a"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  } 

  export default firebase.firestore();