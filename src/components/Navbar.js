import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { THEME } from '../theme'

export const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>
        {title}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: THEME.MAIN_COLOR,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
})