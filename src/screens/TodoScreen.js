import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import { AppCard } from '../ui/AppCard'
import { THEME } from '../theme'

export const TodoScreen = ({goBack, todo}) => {
  return (
    <View>
      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Редактировать" />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" color={THEME.GRAY_COLOR} onPress={goBack}/>
        </View>
        <View style={styles.button}>
          <Button title="Удалить" color={THEME.RED_COLOR} onPress={() => console.log('remove')}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: '40%'
  },
  title: {
    fontSize: 20
  },
  card: {
    marginBottom: 20,
    padding: 15
  }
})