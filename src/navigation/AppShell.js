import {
  NavigationContainer
} from '@react-navigation/native';
import BottomNav from './bottomNav/BottomNav';


const AppShell = () => {
  return (
    <NavigationContainer>
      <BottomNav />
    </NavigationContainer>
  )
}
export default AppShell