import { CircularProgress } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState, type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { type APIPerson } from 'util/api';
import { AppContext } from 'util/context';
import { db } from 'util/firebase/config';
import snack from 'util/notify';
import { usePouch } from 'util/pouch';

const Person: FC = () => {
  const { id } = useParams();
  const [person, setPerson] = useState<APIPerson | null | undefined>();
  const [, setTitle] = usePouch(AppContext, 'pageTitle');
  useEffect(
    () => () => {
      if (person !== undefined && person !== null) setTitle(person.name);
    },
    [person, setTitle]
  );
  useEffect(() => {
    if (id === undefined) {
      return;
    }
    getDoc(doc(db, `people/${id}`))
      .then((document) => {
        setPerson(document.data() as APIPerson | undefined);
      })
      .catch((error: Error) => {
        snack.catch(error);
        setPerson(null);
      });
  }, [id]);
  if (id === null) {
    return <>Error: no ID param given.</>;
  }
  if (person === undefined) {
    return <CircularProgress />;
  }
  if (person === null) {
    return <>{person ?? `No person found for id "${id ?? '[undefined]'}".`}</>;
  }
  return <>{person.name}</>;
};
export default Person;
