import React from 'react'
import { StatusBar } from "expo-status-bar"
import { SafeAreaView, StyleSheet, View } from "react-native"

export default function Layout({children}) {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar backgroundColor="#141414" style="inverted" />
      <View style={styles.insideContainer} >{children}</View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
  },
  insideContainer: {
    marginTop: 30,
    marginBottom: 10
  }
})
