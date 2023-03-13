import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAqpHa1GYZ6bv_klh8gfJNClO0cg6PnTIc",
    authDomain: "storage-b44cc.firebaseapp.com",
    projectId: "storage-b44cc",
    storageBucket: "storage-b44cc.appspot.com",
    messagingSenderId: "932528750400",
    appId: "1:932528750400:web:17d5fd4f816f898edc84a5",
    measurementId: "G-WRTRCZ17EX"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const storageRef = ref(storage);


function uploadFile() {
    const file = document.getElementById('fileInput').files[0];
    const filename = file.name; // set filename variable to the name of the uploaded file
    const imagesRef = ref(storage, 'images');
    const sparkyRef = ref(storage, filename); // use filename variable to set the path in Firebase Storage
  
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!');
    });
  }
  
