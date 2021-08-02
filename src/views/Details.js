import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Details/Header'
import Layout from '../hocs/Layout'

export default function Details({ route }) {
  const { coin } = route.params

  return (
    <Layout>
      <Header 
        uri={coin.image} 
        text={coin.name} 
        symbol={coin.symbol} 
        price={coin.price_change_percentage_24h} 
        currentPrice={coin.current_price}
        />
    </Layout>
  )
}

const styles = StyleSheet.create({
})
