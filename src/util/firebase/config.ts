import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBVZaa9YT2o0pfuvb5-C3gmTKx00kAfRuY',
  authDomain: 'dahlia-23208.firebaseapp.com',
  projectId: 'dahlia-23208',
  storageBucket: 'dahlia-23208.appspot.com',
  messagingSenderId: '407922669447',
  appId: '1:407922669447:web:54ed9f3602fe3532f18522',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export default app;
