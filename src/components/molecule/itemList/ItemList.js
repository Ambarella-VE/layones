import { 
  StyleSheet, 
  FlatList,
  SafeAreaView 
} from 'react-native'
import {
  ListItem
} from '../../atom/index'

const ItemList = ({data, onSelected}) => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item})=> <ListItem item={item} onSelected={onSelected} />}
        keyExtractor={item=>item.id}
      />
    </SafeAreaView>
  )
}
export default ItemList
const styles = StyleSheet.create({
  container: {
    marginBottom: 32
  },
})