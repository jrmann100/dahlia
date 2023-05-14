import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { type Page } from 'components/pages';
import { type CSSProperties, type FC } from 'react';
import { Link } from 'react-router-dom';
import spreads from 'util/spreads';

// todo: replace with breadcrumbs if possible. this won't pop history so it's unfriendly for scroll restoration.
const BackTo: FC<{ page: Page; title?: string; style?: CSSProperties }> = ({
  page: { path, title: pageTitle },
  title: givenTitle,
  style,
}) => (
  <Link style={{ ...spreads.resetLink, ...style }} to={path}>
    <Button variant="text">
      <ArrowBack />{' '}
      {givenTitle ??
        `back ${pageTitle !== undefined ? ` to ${pageTitle}` : ''}`}
    </Button>
  </Link>
);
export default BackTo;
