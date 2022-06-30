import { 
  StyleSheet, 
  Text, 
  View,
  TouchableOpacity,
} from 'react-native'
import {
  useSelector,
  useDispatch
} from 'react-redux'
import {
  selectCategory
} from '../../redux/actions/index'
import {
  ItemList
} from '../../components/molecule/index'


const Categories = ({navigation}) => {
  const dispatch = useDispatch()
  const categories = useSelector(state=>state.categories.categories)
  const categoryProviders = useSelector(state => state.providers.filteredProviders)
  const onSelectedCategoryHandler = prov => {
    dispatch(selectCategory(prov.id))
    navigation.navigate('Providers',{
      name: prov.name
    })
  }


  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Category')}
      >
        <Text>HAZME CLICK</Text>
      </TouchableOpacity>
      <ItemList 
          data={categories} 
          onSelected={onSelectedCategoryHandler} 
        />
    </View>
  )
}
export default Categories
const styles = StyleSheet.create({})