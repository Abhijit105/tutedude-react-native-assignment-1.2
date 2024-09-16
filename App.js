import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Boxes</Text>
      <View style={styles['red-box']}>
        <Text style={styles.text}>Red</Text>
      </View>
      <View style={styles['blue-box']}>
        <Text style={styles.text}>Blue</Text>
      </View>
      <View style={styles['green-box']}>
        <Text style={styles.text}>Green</Text>
      </View>
      <View style={styles['violet-box']}>
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
  'red-box': {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  'blue-box': {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  'green-box': {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'stretch',
    marginTop: 10,
  },
  'violet-box': {
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    alignSelf: 'stretch',
    marginTop: 10,
  },
})
