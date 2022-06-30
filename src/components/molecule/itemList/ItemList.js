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
    <>
      <FlatList
        data={data}
        renderItem={ListItem}
        keyExtractor={item=>item.id}
      />
    </>
  )
}
export default ItemList
const styles = StyleSheet.create({

})