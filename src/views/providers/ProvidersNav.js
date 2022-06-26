import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Providers
} from './index'

const Stack = createNativeStackNavigator();

const ProvidersNav = () => {
  const screens = [
    {
      id: 1,
      name: 'Providers',
      title: 'Mis Favoritos',
      component: Providers,
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
export default ProvidersNav