import { type FC } from 'react';
import Drawer from '@mui/material/Drawer';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import pages from 'components/pages';
import spreads from 'util/spreads';
import { usePouch } from 'util/pouch';
import { AppContext } from 'util/context';
import Spacer from 'components/common/Spacer';
import { Login, Logout } from '@mui/icons-material';
import { auth, useAuth } from 'util/firebase/auth';
import snack from 'util/notify';

const Sidebar: FC = () => {
  const [expanded] = usePouch(AppContext, 'sidebarExpanded');
  const drawerWidth = expanded ? 200 : 0;
  const transition = 'width 0.2s';
  const { isAuthenticated } = useAuth();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        transition,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
          transition,
        },
      }}
    >
      <Toolbar />
      <List
        component="nav"
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        {Object.values(pages).map(
          ({ path, title, sidebarIcon: Icon }) =>
            Icon !== undefined && (
              <Link key={path} style={spreads.resetLink} to={path}>
                <ListItemButton>
                  {/* todo: highlight/bold matching route sx={{ bgcolor: (theme) => theme.palette.grey[200] }} */}
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  <ListItemText primary={title} />
                </ListItemButton>
              </Link>
            )
        )}
        <Spacer />
        {isAuthenticated ? (
          <ListItemButton
            sx={{ flexGrow: 0 }}
            onClick={() => {
              auth.signOut().catch(snack.catch);
            }}
          >
            {/* todo: highlight/bold matching route sx={{ bgcolor: (theme) => theme.palette.grey[200] }} */}
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        ) : (
          <Link to={pages.login.path} style={spreads.resetLink}>
            <ListItemButton sx={{ flexGrow: 0 }}>
              {/* todo: highlight/bold matching route sx={{ bgcolor: (theme) => theme.palette.grey[200] }} */}
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <ListItemText primary="Log In" />
            </ListItemButton>
          </Link>
        )}
      </List>
    </Drawer>
  );
};
export default Sidebar;
