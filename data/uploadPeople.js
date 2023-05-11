import admin from 'firebase-admin';
import serviceAccount from './serviceKey.json' assert { type: 'json' };
import people from './people.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const collection = admin.firestore().collection('people');

people.forEach((person) => collection.add(person));
