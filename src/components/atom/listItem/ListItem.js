import { 
  StyleSheet, 
  Text, 
  TouchableOpacity,
  View,
} from 'react-native'
import {
  Theme,
} from '../../../styles/index'

const ListItem = ({item,onSelected}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.text}>
          {item.name}
        </Text>  
      </View>
    </TouchableOpacity>
  )
}
export default ListItem
const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.palette.light.secondary,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    height: 160,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    textColor: Theme.palette.light.textTertiary,
  },
  labelContainer:{
    margin: 16
  },
  text: {
    padding: 16,
    color: Theme.palette.light.textTertiary,
    fontFamily: Theme.fonts.labelLarge.fontFamily,
    fontSize: Theme.fonts.labelLarge.fontSize,
    lineHeight: Theme.fonts.labelLarge.lineHeight,
    letterSpacing: Theme.fonts.labelLarge.letterSpacing
  }
})