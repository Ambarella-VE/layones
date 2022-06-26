import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native'
const Categories = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Category')}
      >
        <Text>HAZME CLICK</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Categories
const styles = StyleSheet.create({})