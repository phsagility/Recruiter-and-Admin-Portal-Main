const firebaseConfig = {
  apiKey: "AIzaSyCNmdyHbcIF0shdSMTKA52UXfsIphRpWHM",
  authDomain: "pre-emp-and-medical.firebaseapp.com",
  projectId: "pre-emp-and-medical",
  storageBucket: "pre-emp-and-medical.firebasestorage.app",
  messagingSenderId: "472502208128",
  appId: "1:472502208128:web:b34a387a0b1477f2300865",
  measurementId: "G-N1GZQPVBL"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const notesCollection = db.collection('medicalNotes');

window.notesCollection = notesCollection;
window.notesDb = db;
window.notesApp = app;
