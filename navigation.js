import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './App';
import screen from './discription';
const AppNavigator = createStackNavigator(
{
    Home,
    screen,
},
    {
        headerMode: 'none',
        navigationOptions: {
          headerVisible: false,
          header: null,
          headerForceInset: { top: 'never', bottom: 'never' },
        },
      },
    
    
    
    );
    
    
export default createAppContainer(AppNavigator)