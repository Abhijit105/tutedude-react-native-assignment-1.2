import { StyleSheet, Text, View } from 'react-native'

export default function ColorBox({ color }) {
  return (
    <View style={[styles['box'], { backgroundColor: color.hex }]}>
      <Text style={styles.text}>{color.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'stretch',
    marginTop: 10,
    borderRadius: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    color: 'white',
  },
})
