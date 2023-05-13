import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { getPersonPosition, type APIPerson } from 'util/api';
import pages from 'components/pages';

const Person: FC<{ id: string; value: APIPerson }> = ({
  id,
  value: person,
}) => (
  <Card sx={{ maxWidth: 400 }}>
    <CardActionArea component={Link} to={pages.person.path.replace(':id', id)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={person.picture}>
            {person.name
              .split(' ')
              .map((x) => x[0])
              .join('')}
          </Avatar>
        }
        title={person.name}
        subheader={getPersonPosition(person)}
      />
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={person.picture}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {JSON.stringify(person.core)}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);
export default Person;
