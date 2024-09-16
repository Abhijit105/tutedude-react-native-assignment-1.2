import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Boxes</Text>
      <View style={[styles['box'], styles['red-box']]}>
        <Text style={styles.text}>Red</Text>
      </View>
      <View style={[styles['box'], styles['blue-box']]}>
        <Text style={styles.text}>Blue</Text>
      </View>
      <View style={[styles['box'], styles['green-box']]}>
        <Text style={styles.text}>Green</Text>
      </View>
      <View style={[styles['box'], styles['violet-box']]}>
        <Text style={styles.text}>Violet</Text>
      </View>
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
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'white',
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'stretch',
    marginTop: 10,
    borderRadius: 4,
  },
  'red-box': {
    backgroundColor: 'red',
  },
  'blue-box': {
    backgroundColor: 'blue',
  },
  'green-box': {
    backgroundColor: 'green',
  },
  'violet-box': {
    backgroundColor: 'violet',
  },
})
