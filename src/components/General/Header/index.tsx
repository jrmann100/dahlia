import {
  Menu as MenuIcon,
  AccountCircle as AccountCircleIcon,
} from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { type FC } from 'react';
import { redirect } from 'react-router-dom';

const Header: FC = () => (
  <>
    <AppBar position="absolute">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton color="inherit" onClick={() => redirect('/account')}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </>
);

export default Header;
