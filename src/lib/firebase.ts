import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBE8F9GHshqMD00h_pVy8qZGeFX1OP8t54",
    authDomain: "svelte-networking-app.firebaseapp.com",
    projectId: "svelte-networking-app",
    storageBucket: "svelte-networking-app.appspot.com",
    messagingSenderId: "219184926846",
    appId: "1:219184926846:web:4ecd0de236f8ae7d0cc82f",
    measurementId: "G-SG8N6ED8GZ"
  };

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const auth = getAuth()
export const storage = getStorage()