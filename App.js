import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthenticationScreen from './src/screens/AuthenticationScreen';
import DashboardScreen from './src/screens/DashboardScreen';

const navigator = createStackNavigator(
  {
    Authentication: AuthenticationScreen,
    Dashboard: DashboardScreen
  },
  {
    initialRouteName: 'Authentication',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(navigator);
