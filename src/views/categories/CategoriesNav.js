import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Categories,
  Category,
} from './index'

const Stack = createNativeStackNavigator();

const CategoriesNav = () => {
  const screens = [
    {
      id: 1,
      name: 'Categories',
      title: 'Categorías',
      component: Categories,
    },
    {
      id: 2,
      name: 'Category',
      title: 'Categoría',
      component: Category,
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
export default CategoriesNav