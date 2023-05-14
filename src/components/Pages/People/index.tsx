import { Grid } from '@mui/material';
import PersonCard from 'components/pages/People/PersonCard';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useEffect, type FC, useState } from 'react';
import { type APIPerson } from 'util/api';
import { AppContext } from 'util/context';
import { db } from 'util/firebase/config';
import snack from 'util/notify';
import { usePouch } from 'util/pouch';

const People: FC = () => {
  const [people, setPeople] = useState<
    Array<{ id: string; person: APIPerson }>
  >([]);

  const [, setLoading] = usePouch(AppContext, 'showLoader');

  useEffect(() => {
    setLoading(people.length === 0);
  }, [people.length, setLoading]);

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
          <PersonCard id={id} value={person} />
        </Grid>
      ))}
    </Grid>
  );
};
export default People;
