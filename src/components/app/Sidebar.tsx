import { type FC } from 'react';
import Drawer from '@mui/material/Drawer';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { Home, People } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import pages from 'components/pages';
import spreads from 'util/spreads';
import { useSidebar } from 'util/context';

const Sidebar: FC = () => {
  const [expanded] = useSidebar();
  const drawerWidth = expanded ? 200 : 0;
  const transition = 'width 0.2s';
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
      <List component="nav">
        <Link style={spreads.resetLink} to={pages.home.path}>
          <ListItemButton>
            {/* todo: highlight/bold matching route sx={{ bgcolor: (theme) => theme.palette.grey[200] }} */}
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </Link>
        <Link style={spreads.resetLink} to={pages.people.path}>
          <ListItemButton>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="People" />
          </ListItemButton>
        </Link>
      </List>
    </Drawer>
  );
};
export default Sidebar;
