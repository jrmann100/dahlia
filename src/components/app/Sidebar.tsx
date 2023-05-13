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

const Sidebar: FC = () => {
  const [expanded] = usePouch(AppContext, 'sidebarExpanded');
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
      </List>
    </Drawer>
  );
};
export default Sidebar;
