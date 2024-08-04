import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { LateralScroll, NotificationButton, YeahAnimation, WelcomePage } from './src/components/index.js'

export default function App() {
  const [showAdditionalComponents, setShowAdditionalComponents] = useState(false)

  const handleFormSubmit = () => {
    setShowAdditionalComponents(true)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!showAdditionalComponents ? (
        <WelcomePage onFormSubmit={handleFormSubmit} />
      ) : (
        <>
          <LateralScroll />
          <NotificationButton />
          <YeahAnimation />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})