import MaterialIcon from '@material/react-material-icon';
import TopAppBar, {
  TopAppBarFixedAdjust,
  TopAppBarIcon,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
} from '@material/react-top-app-bar';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => (
  <>
    <TopAppBar>
      <TopAppBarRow>
        <TopAppBarSection align="start">
          <TopAppBarIcon navIcon tabIndex={0}>
            <MaterialIcon
              icon="menu"
              onClick={() => {
                console.log('click');
              }}
            />
          </TopAppBarIcon>
          <TopAppBarTitle>Dahlia</TopAppBarTitle>
        </TopAppBarSection>
        <TopAppBarSection align="end" role="toolbar">
          <TopAppBarIcon actionItem tabIndex={0}>
            <Link to="/account">
              <MaterialIcon aria-label="account" icon="account_circle" />
            </Link>
          </TopAppBarIcon>
        </TopAppBarSection>
      </TopAppBarRow>
    </TopAppBar>
    <TopAppBarFixedAdjust />
  </>
);

export default Header;
