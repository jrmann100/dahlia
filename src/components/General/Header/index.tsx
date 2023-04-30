import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { type FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  const navigate = useNavigate();
  return (
    <>
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
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => {
              navigate('/account');
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
