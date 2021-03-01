import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//style
import "./assets/styles/index.css";
import './assets/styles/tailwind.css'

//firebase
import firebase from 'firebase/app'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCA2ULlpspr_D0W8rdhyFBFyavsvVp69hQ",
    authDomain: "absen-digital-7b24e.firebaseapp.com",
    projectId: "absen-digital-7b24e",
    storageBucket: "absen-digital-7b24e.appspot.com",
    messagingSenderId: "585842317295",
    appId: "1:585842317295:web:6ed58ef35011eea151881a",
    measurementId: "G-15QL9TEN7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user=>{
    console.log(user)
    if (!app){
        app = createApp(App).use(router).mount('#app') 
    }
})




