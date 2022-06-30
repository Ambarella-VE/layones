import { 
  StyleSheet, 
  FlatList,
  SafeAreaView 
} from 'react-native'
import {
  ListItem
} from '../../atom/index'
import {
  useEffect
} from 'react'

const ItemList = ({data, onSelected}) => {

  useEffect(() => {
    console.log(data)
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={item=> <ListItem item={item} onSelected={onSelected} />}
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