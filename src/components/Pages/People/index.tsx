import { Grid } from '@mui/material';
import Person from 'components/pages/People/PersonCard';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, type FC, useState } from 'react';
import { type APIPerson } from 'util/api';
import { db } from 'util/firebase/config';
import snack from 'util/notify';

const People: FC = () => {
  const [people, setPeople] = useState<
    Array<{ id: string; person: APIPerson }>
  >([]);

  useEffect(() => {
    getDocs(collection(db, 'people'))
      .then((snapshot) => {
        setPeople(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            person: doc.data() as APIPerson,
          }))
        );
      })
      .catch(snack.catch);
  }, []);

  return (
    <Grid container spacing={2} justifyContent="space-around">
      {people.map(({ id, person }) => (
        <Grid item key={id} flexGrow={1} flexShrink={0}>
          <Person id={id} value={person} />
        </Grid>
      ))}
    </Grid>
  );
};
export default People;
