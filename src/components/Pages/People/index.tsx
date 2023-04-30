import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, type FC, useState } from 'react';
import { db } from 'util/firebase';
import snack from 'util/notify';

const People: FC = () => {
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    getDocs(collection(db, 'users'))
      .then((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      })
      .catch(snack.catch);
  }, []);

  return <>{people}</>;
};
export default People;
