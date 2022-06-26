import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Profile
} from './index'

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  const screens = [
    {
      id: 1,
      name: 'Profile',
      title: 'Mi Perfil',
      component: Profile,
    },
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
export default ProfileNav