import {
  SubMenuBootStrap,
  MenuItemBootStrap,
  DashboardItemBootStrap,
  useTranslate
} from 'story-bootstrap';
import { NavBar, NavDivider } from './NavLayout';
import registerIcons from '../registerIcons';

const Menu = ({ hasDashboard, ...props }) => {
  console.log('🚀 ~ file: Menu.js ~ line 11 ~ Menu ~ props', props);
  const { location } = props;
  // hooks
  const { translate } = useTranslate();

  return (
    <NavBar>
      {hasDashboard && (
        <DashboardItemBootStrap
          location={location}
          registerIcons={registerIcons}
        />
      )}
      <NavDivider />
      <SubMenuBootStrap
        primaryText={translate('resources.ancients.name')}
        leftIcon="AutoAwesomeMotion"
        registerIcons={registerIcons}
      >
        <MenuItemBootStrap
          to={{
            pathname: '/vampire-list',
            state: { _scrollToTop: true }
          }}
          primaryText={translate('resources.ancients.vampires.name', {
            smart_count: 2
          })}
          registerIcons={registerIcons}
          location={location}
        />
        <MenuItemBootStrap
          to={{
            pathname: '/monster-list',
            state: { _scrollToTop: true }
          }}
          primaryText={translate('resources.ancients.monsters.name', {
            smart_count: 2
          })}
          registerIcons={registerIcons}
          location={location}
        />
      </SubMenuBootStrap>
      <NavDivider />
    </NavBar>
  );
};

export default Menu;
