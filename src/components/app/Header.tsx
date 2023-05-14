import {
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
} from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from 'util/context';
import { usePouch } from 'util/pouch';

const Header: FC = () => {
  const [title] = usePouch(AppContext, 'pageTitle');
  const [sidebarExpanded, setSidebarExpanded] = usePouch(
    AppContext,
    'sidebarExpanded'
  );
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
            setSidebarExpanded(!sidebarExpanded);
          }}
        >
          {sidebarExpanded ? <MenuOpenIcon /> : <MenuIcon />}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
