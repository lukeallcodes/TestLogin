import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtZT2so2JKc8RZn6e4fuQGSMU26WHNef0",
    authDomain: "testproject1-d81f0.firebaseapp.com",
    projectId: "testproject1-d81f0",
    storageBucket: "testproject1-d81f0.appspot.com",
    messagingSenderId: "836098112901",
    appId: "1:836098112901:web:af079986b12aae9b0118ec",
    measurementId: "G-MZHBLGSZ7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Script to open and close login modal
var loginModal = document.getElementById('login-modal');
var loginBtn = document.getElementById("login-btn");
var closeBtn = document.getElementById("login-modal-close");

// When the user clicks on the button, open the modal
loginBtn.onclick = function login() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Sign in with email and password
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Success!")
      })
      .catch((error) => {
        // Handle login errors
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  
  loginModal.style.display = "block";

}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function() {
  loginModal.style.display = "none";
}

  
