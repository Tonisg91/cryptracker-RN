import React from 'react'
import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet } from "react-native"

export default function Layout({children}) {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor="#141414" style="inverted" />
      {children}
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
    alignItems: "center",
  }
})
