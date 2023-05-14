import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { getPersonPosition, type APIPerson, getShortYear } from 'util/api';
import pages from 'components/pages';
import Spacer from 'components/common/Spacer';

const Person: FC<{ id: string; value: APIPerson }> = ({
  id,
  value: person,
}) => (
  <Card>
    <CardActionArea component={Link} to={pages.person.path.replace(':id', id)}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" src={person.picture}>
            {`${person.name
              .split(' ')
              .map((x) => x[0])
              .join('')} ${getShortYear(person)}`}
          </Avatar>
        }
        title={person.name}
        subheader={getPersonPosition(person)}
      />
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        width="300"
        image={person.picture}
      />
      <CardContent>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant="body2" color="text.secondary">
            {person.major !== null && `Major: ${person.major}`}
          </Typography>
          <Spacer basis="0" />
          <Typography variant="body2" color="text.secondary">
            {person.minor !== null && `Minor: ${person.minor}`}
          </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
);
export default Person;
