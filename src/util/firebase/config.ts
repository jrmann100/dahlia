import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBzCA07j7O9zqRPS1jnaucH3vCGlpmYF38',
  authDomain: 'dali-link.firebaseapp.com',
  projectId: 'dali-link',
  storageBucket: 'dali-link.appspot.com',
  messagingSenderId: '1078229731902',
  appId: '1:1078229731902:web:32a9f3df68275d719adf6f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
