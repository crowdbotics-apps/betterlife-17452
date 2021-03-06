import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging53214Navigator from '../features/Messaging53214/navigator';
import Tutorial53213Navigator from '../features/Tutorial53213/navigator';
import Maps53212Navigator from '../features/Maps53212/navigator';
import CalendarView53211Navigator from '../features/CalendarView53211/navigator';
import Camera53210Navigator from '../features/Camera53210/navigator';
import EmailAuth53209Navigator from '../features/EmailAuth53209/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Messaging53214: { screen: Messaging53214Navigator },
Tutorial53213: { screen: Tutorial53213Navigator },
Maps53212: { screen: Maps53212Navigator },
CalendarView53211: { screen: CalendarView53211Navigator },
Camera53210: { screen: Camera53210Navigator },
EmailAuth53209: { screen: EmailAuth53209Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
