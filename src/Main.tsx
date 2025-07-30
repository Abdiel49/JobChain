import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputTextComponent from './components/input/InputTextComponent'

const Main = () => {
  const [emailInput, setEmailInput] = useState('')

  return (
    <View style={styles.container}>
      {/* <Text>Main Component</Text> */}
      <View style={styles.formContainer}>
        <InputTextComponent
          placeholder='Escribe tu correo electrónico'
          value={emailInput}
          label='Correo electrónico'
          onChangeText={setEmailInput}
        />
      </View>
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  formContainer : {
    paddingHorizontal: 20,
    // backgroundColor: 'red',
    gap: 10,
  }

})