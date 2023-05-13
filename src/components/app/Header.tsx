import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTitle } from 'util/context';

const Header: FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const [title] = useTitle();
  return (
    <AppBar position="absolute">
      <Toolbar sx={{ gap: '0.5em' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          noWrap
          sx={{ mr: '1em' }}
          fontWeight="bold"
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Dahlia
          </Link>
        </Typography>
        <Typography
          component="h2"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
        <Button
          onClick={() => {
            navigate(`/me`);
          }}
        >
          <Avatar sx={{ bgcolor: pink[400] }}>
            <AccountCircleIcon />
          </Avatar>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
