import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function PriceChange({ price, style }) {
  return (
    <View>
      <Text
        style={[
          style,
          styles.pricePercentage,
          price > 0
            ? styles.priceUp
            : styles.priceDown,
        ]}
      >
        {price.toFixed(2)}%
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  pricePercentage: {
    textAlign: "right",
  },
  priceUp: {
    color: "#00B589",
  },
  priceDown: {
    color: "#fc4422",
  },
})
