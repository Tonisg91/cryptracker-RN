import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import PriceChange from './PriceChange';

export default function Coin({ coin }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.containerItem} onPress={() => navigation.navigate('Details', { coin })}  >
    <View style={styles.coinName}>
      <Image source={{ uri: coin.image }} style={styles.image} />
      <View style={styles.containerNames}>
        <Text style={styles.text}>{coin.name}</Text>
        <Text style={styles.textSymbol}>{coin.symbol}</Text>
      </View>
    </View>
    <View>
      <Text style={styles.textPrice}>${coin.current_price}</Text>
      <PriceChange price={coin.price_change_percentage_24h} />
    </View>
  </TouchableOpacity>)
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerNames: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
  textPrice: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    width: 30,
    height: 30,
  },
  textSymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
})
