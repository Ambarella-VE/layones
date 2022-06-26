import { StatusBar } from 'expo-status-bar';
import { 
  ActivityIndicator
} from 'react-native';
import {
  useFonts
} from 'expo-font'
import AppShell from './src/navigation/AppShell';
import {
  Theme,
} from './src/styles/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    NotoSans: require('./assets/fonts/NotoSans-Regular.ttf'),
    NotoSansBlack: require('./assets/fonts/NotoSans-Black.ttf'),
    NotoSansBlackItalic: require('./assets/fonts/NotoSans-BlackItalic.ttf'),
    NotoSansBold: require('./assets/fonts/NotoSans-Bold.ttf'),
    NotoSansBoldItalic: require('./assets/fonts/NotoSans-BoldItalic.ttf'),
    NotoSansExtraBold: require('./assets/fonts/NotoSans-ExtraBold.ttf'),
    NotoSansExtraBoldItalic: require('./assets/fonts/NotoSans-ExtraBoldItalic.ttf'),
    NotoSansExtraLight: require('./assets/fonts/NotoSans-ExtraLight.ttf'),
    NotoSansExtraLightItalic: require('./assets/fonts/NotoSans-ExtraLightItalic.ttf'),
    NotoSansItalic: require('./assets/fonts/NotoSans-Italic.ttf'),
    NotoSansLight: require('./assets/fonts/NotoSans-Light.ttf'),
    NotoSansLightItalic: require('./assets/fonts/NotoSans-LightItalic.ttf'),
    NotoSansMedium: require('./assets/fonts/NotoSans-Medium.ttf'),
    NotoSansMediumItalic: require('./assets/fonts/NotoSans-MediumItalic.ttf'),
    NotoSansSemiBold: require('./assets/fonts/NotoSans-SemiBold.ttf'),
    NotoSansSemiBoldItalic: require('./assets/fonts/NotoSans-SemiBoldItalic.ttf'),
    NotoSansThin: require('./assets/fonts/NotoSans-Thin.ttf'),
    NotoSansThinItalic: require('./assets/fonts/NotoSans-ThinItalic.ttf'),
  })

  return (
    <>
      {
        !fontsLoaded ?
        <ActivityIndicator 
        size="large" 
        color={Theme.palette.light.primary} 
        /> :
        <AppShell />
      }
      <StatusBar style="auto" />
    </>
  );
}
