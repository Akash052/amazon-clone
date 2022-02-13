import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiJyruGLbDs7pNZk6uk89r9bnRukfKJ0g",
    authDomain: "clone-1c427.firebaseapp.com",
    projectId: "clone-1c427",
    storageBucket: "clone-1c427.appspot.com",
    messagingSenderId: "441269111985",
    appId: "1:441269111985:web:88e403d6107605f65ee690",
    measurementId: "G-QMLW88ESHC"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};