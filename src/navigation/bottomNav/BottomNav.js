import { 
  StyleSheet, 
} from 'react-native'
import {
  createMaterialBottomTabNavigator
} from '@react-navigation/material-bottom-tabs'
import {
  HomeNav,
  CategoriesNav,
  ProvidersNav,
  ProfileNav
} from '../../views/index'
import {
  Theme
} from '../../styles/index'
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator()

const BottomNav = () => {
  const tabs = [
    {
      id: 1,
      name: 'HomeNav',
      label: 'Inicio',
      component: HomeNav,
      icon: 'home-outline',
      iconFocused: 'home',
    },
    {
      id: 2,
      name: 'CategoriesNav',
      label: 'Buscar',
      component: CategoriesNav,
      icon: 'search-outline',
      iconFocused: 'search',
    },
    {
      id: 3,
      name: 'ProvidersNav',
      label: 'Mis Favoritos',
      component: ProvidersNav,
      icon: 'heart-outline',
      iconFocused: 'heart',
    },
    {
      id: 4,
      name: 'ProfileNav',
      label: 'Perfil',
      component: ProfileNav,
      icon: 'person-outline',
      iconFocused: 'person',
    }
  ]
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor={Theme.palette.light.white}
      inactiveColor={Theme.palette.light.textSecondary}
      barStyle={{
        backgroundColor: Theme.palette.light.primary,
        paddingVertical: 8
      }}
    >
      {
        tabs.map(tab => {
          return (
            <Tab.Screen
            key={tab.id} 
            name={tab.name}
            component={tab.component}
            options={{
              tabBarLabel: tab.label,
              tabBarIcon: ({ focused }) => (
                <Ionicons 
                  name={focused ? tab.iconFocused : tab.icon}
                  size={24}
                  color={focused ? Theme.palette.light.white : Theme.palette.light.tertiary}
                />
              )
            }}
          />
          )
        })
      }
    </Tab.Navigator>
  )
}
export default BottomNav
const styles = StyleSheet.create({})