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
import { type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSidebar, useTitle } from 'util/context';

const Header: FC = () => {
  const navigate = useNavigate();
  const [title] = useTitle();
  const [, toggleSidebar] = useSidebar();
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ gap: '0.5em' }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => {
            toggleSidebar();
          }}
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
          <Avatar sx={{ bgcolor: 'transparent' }}>
            <AccountCircleIcon fontSize="large" />
          </Avatar>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
