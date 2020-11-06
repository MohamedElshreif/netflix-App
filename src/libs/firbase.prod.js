// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import Firebase from 'firebase/app';
// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDflP7Jbxrbc3YeEylMEsnK8YDl9pDXuB0',
  authDomain: 'netflix-b3d8c.firebaseapp.com',
  databaseURL: 'https://netflix-b3d8c.firebaseio.com',
  projectId: 'netflix-b3d8c',
  storageBucket: 'netflix-b3d8c.appspot.com',
  messagingSenderId: '970971247799',
  appId: '1:970971247799:web:16dea22e146490593e0932',
  measurementId: 'G-4KTB9B3GQE',
};

// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);

export { firebase };
