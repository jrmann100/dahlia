import Drawer, {
  DrawerHeader,
  DrawerTitle,
  DrawerAppContent,
  DrawerContent,
} from '@material/react-drawer';
import { type FC } from 'react';
import MaterialIcon from '@material/react-material-icon';
import List, {
  ListItem,
  ListItemGraphic,
  ListItemText,
} from '@material/react-list';

const Sidebar: FC<{ open: boolean }> = ({ open }) => (
  <>
    <Drawer>
      <DrawerHeader>
        <DrawerTitle tag="h2">jane.smith@gmail.com</DrawerTitle>
      </DrawerHeader>

      <DrawerContent>
        <List singleSelection selectedIndex={this.state.selectedIndex}>
          <ListItem>
            <ListItemGraphic graphic={<MaterialIcon icon="folder" />} />
            <ListItemText primaryText="Mail" />
          </ListItem>
        </List>
      </DrawerContent>
    </Drawer>
  </>
);
export default Sidebar;
