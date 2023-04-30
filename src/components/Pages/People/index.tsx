import { collection, getDocs } from 'firebase/firestore/lite';
import { enqueueSnackbar } from 'notistack';
import { useEffect, type FC, useState } from 'react';
import { db } from 'util/firebase';

const People: FC = () => {
  const [people, setPeople] = useState<any[]>([]);

  useEffect(() => {
    getDocs(collection(db, 'users'))
      .then((snapshot) => {
        setPeople(snapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        enqueueSnackbar(error.toString(), { variant: 'warning' });
      });
  }, []);

  return <>{people}</>;
};
export default People;
