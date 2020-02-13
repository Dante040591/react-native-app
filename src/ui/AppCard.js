import React from 'react'
import { View, StyleSheet } from 'react-native'

export const AppCard = (props) => {
  return (
    <View style={{...styles.AppCard, ...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  AppCard: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000', //only iOS
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 2,
      height: 2
    }, 
    backgroundColor: '#fff',
    borderRadius: 10,
  }
})