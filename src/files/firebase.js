 import firebase from 'firebase';
 
 var firebaseConfig = {
    apiKey: "AIzaSyC-8fwqhSsk8XhCvKNEup6-zJsfAfLZwS0",
    authDomain: "eldoret-sacco.firebaseapp.com",
    projectId: "eldoret-sacco",
    storageBucket: "eldoret-sacco.appspot.com",
    messagingSenderId: "603061759919",
    appId: "1:603061759919:web:73ffa82446d5cd2e3f895a"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;