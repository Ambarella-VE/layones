import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Home
} from './index'

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  const screens = [
    {
      id: 1,
      name: 'Home',
      title: 'Inicio',
      component: Home,
    }
  ]
  return (
    <Stack.Navigator>
      {
        screens.map(screen => (
          <Stack.Screen
            key={screen.id}
            name={screen.name}
            component={screen.component}
            options={{
              title: screen.title
            }}
          />
        ))
      }
      
    </Stack.Navigator>
  )
}
export default HomeNav