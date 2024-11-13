import { FlatList, StyleSheet, Text, View } from 'react-native'
import { ArrayColors } from './assets/RawData'
import ColorBox from './src/components/ColorBox/ColorBox'

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={ArrayColors}
        keyExtractor={item => item.hex}
        renderItem={({ item, index }) => <ColorBox color={item} key={index} />}
        ListHeaderComponent={<Text style={styles.heading}>List of Colors</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  list: {
    alignSelf: 'stretch',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
})
