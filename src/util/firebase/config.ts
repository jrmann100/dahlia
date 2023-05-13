import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMr_0cot-dRNwfosX2-8-xRvsRyMlT5e4',
  authDomain: 'dahlia-web.firebaseapp.com',
  projectId: 'dahlia-web',
  storageBucket: 'dahlia-web.appspot.com',
  messagingSenderId: '941777279941',
  appId: '1:941777279941:web:fa722d71409839d3e809ac',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
