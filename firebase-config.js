// firebase-config.js

const firebaseConfig = {
  apiKey: "AIzaSyBeqn-t-e-hZhYV_6zh1UCvrk38HhYOZ7o",
  authDomain: "foursimpleproblems.firebaseapp.com",
  projectId: "foursimpleproblems",
  storageBucket: "foursimpleproblems.firebasestorage.app",
  messagingSenderId: "329009885873",
  appId: "1:329009885873:web:4b907162188effc788e890",
  measurementId: "G-9CQPE80MXD"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a reference to the authentication service
const auth = firebase.auth();

// Get a reference to the Firestore service
const db = firebase.firestore();
