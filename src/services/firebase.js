import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAv-HD-ADES3cjWCmfaA0CsJjl42fLkXeQ",
    authDomain: "turnos-peluqueria-fb559.firebaseapp.com",
    projectId: "turnos-peluqueria-fb559",
    storageBucket: "turnos-peluqueria-fb559.firebasestorage.app",
    messagingSenderId: "1050494585843",
    appId: "1:1050494585843:web:c60156cd9c0291de23e086",
    measurementId: "G-S194HHHP5L"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  const analytics = getAnalytics(app);