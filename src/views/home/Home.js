import { StyleSheet, Text, View } from 'react-native'
const Home = () => {
  return (
    <View styles={styles.container}>
      <Text>Home from stack</Text>
    </View>
  )
}
export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})