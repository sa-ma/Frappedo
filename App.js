import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthenticationScreen from './src/screens/AuthenticationScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import UpdateTaskScreen from './src/screens/UpdateTaskScreen';

const navigator = createStackNavigator(
  {
    Authentication: AuthenticationScreen,
    Dashboard: DashboardScreen,
    AddTask: AddTaskScreen,
    UpdateTask: UpdateTaskScreen
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
