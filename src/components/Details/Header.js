import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import PriceChange from '../PriceChange'

export default function Header({ uri, text, symbol, price, currentPrice }) {
  return (
    <View style={[styles.container, styles.row]} >
        <View style={styles.row} >
          <Image source={{uri}} style={styles.image} />
          <Text style={styles.text} >{text}</Text>
          <Text style={styles.symbol} >{`(${symbol.toUpperCase()})`}</Text>
        </View>
        <View >
          <PriceChange price={price} style={styles.priceChange} />
          <Text style={styles.currentPrice} >{currentPrice} USD</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  container: {
    width: '100%',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  image: {
    width: 50,
    height: 50
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  symbol: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 5
  },
  priceChange: {
    paddingLeft: 10,
    fontSize: 15,
  },
  currentPrice: {
    color: 'white',
    paddingBottom: 5
  }
})
