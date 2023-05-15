import { Box, Typography } from '@mui/material';
import BackTo from 'components/common/BackTo';
import pages from 'components/pages';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState, type FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPersonPosition, type APIPerson, getShortYear } from 'util/api';
import { AppContext } from 'util/context';
import { db } from 'util/firebase/config';
import snack from 'util/notify';
import { usePouch } from 'util/pouch';
import spreads from 'util/spreads';

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

  const [, setLoading] = usePouch(AppContext, 'showLoader');
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

  useEffect(() => {
    setLoading(person === undefined);
  }, [person, setLoading]);
  if (id === null) {
    return <>Error: no ID param given.</>;
  }
  if (person === undefined) {
    return null;
  }
  if (person === null) {
    return <>{person ?? `No person found for id "${id ?? '[undefined]'}".`}</>;
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <BackTo
        page={pages.people}
        title="Everyone"
        style={{ display: 'block', marginBottom: '0.5rem' }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 2,
          ...spreads.full,
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${person.picture})`,
            flexBasis: '20rem',
            minHeight: '20rem',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'top center',
            height: 'auto',
            flexGrow: 1,
          }}
        />
        <Box
          sx={{
            flex: 1,
            flexBasis: '60%',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            maxWidth: 'fit-content',
            ...spreads.bordered,
          }}
        >
          <Box>
            <Typography variant="h2">
              {person.name} <small>{getShortYear(person)}</small>
            </Typography>
            <Typography variant="subtitle1" fontSize={20}>
              {getPersonPosition(person)}
            </Typography>
          </Box>
          <Typography
            fontSize={25}
            sx={{
              flex: 1,
              fontWeight: 'light',
              fontStyle: 'italic',
              textAlign: 'right',
              maxWidth: '80%',
              alignSelf: 'end',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {person.quote}
          </Typography>
          <Box
            component="table"
            sx={{
              ...spreads.bordered,
              padding: '0.5rem',
            }}
          >
            <Typography variant="h6" component="thead">
              <tr>
                <th style={{ textAlign: 'left' }}>
                  {person.major?.length > 0 && 'Major'}
                </th>
                <th style={{ textAlign: 'right' }}>
                  {person.minor?.length > 0 && 'Minor'}
                </th>
              </tr>
            </Typography>
            <Typography variant="body1" component="tbody">
              <tr>
                <td style={{ textAlign: 'left' }}>{person.major}</td>
                <td style={{ textAlign: 'right' }}>{person.minor}</td>
              </tr>
            </Typography>
          </Box>

          <Box
            component="table"
            sx={{
              ...spreads.bordered,
              padding: '0.5rem',
            }}
          >
            {/* todo: tabs */}
            <Typography variant="h6" component="thead">
              <tr>
                <th style={{ textAlign: 'left' }}>Favorite Things</th>
              </tr>
            </Typography>
            <Typography variant="body1" component="tbody">
              <tr>
                <td style={{ textAlign: 'left' }}>
                  {person['favorite thing 1']}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>
                  {person['favorite thing 2']}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'left' }}>
                  {person['favorite thing 3']}
                </td>
              </tr>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Person;
