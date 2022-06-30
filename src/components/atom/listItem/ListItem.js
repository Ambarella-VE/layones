import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'

const ListItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  )
}
export default ListItem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    heigth: 20
  }
})