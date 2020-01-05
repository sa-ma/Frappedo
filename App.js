import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import AuthenticationScreen from './src/screens/AuthenticationScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import UpdateTaskScreen from './src/screens/UpdateTaskScreen';

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator(
    { Authentication: AuthenticationScreen },
    { headerMode: 'none' }
  ),
  mainflow: createStackNavigator(
    {
      Dashboard: DashboardScreen,
      AddTask: AddTaskScreen,
      UpdateTask: UpdateTaskScreen
    },
    {
      headerMode: 'none'
    }
  )
});
export default createAppContainer(navigator);
