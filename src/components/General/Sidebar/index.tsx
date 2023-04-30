import { type FC } from 'react';
import Drawer from '@mui/material/Drawer';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Unsubscribe } from '@mui/icons-material';

const Sidebar: FC<{ open: boolean }> = ({ open }) => (
  <>
    <Drawer>
      <List component="nav">
        <ListItemButton>
          <ListItemIcon>
            <Unsubscribe />
          </ListItemIcon>
          <ListItemText primary="Unsubscribe" />
        </ListItemButton>
      </List>
    </Drawer>
  </>
);
export default Sidebar;
