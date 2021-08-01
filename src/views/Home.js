import React, { useState } from 'react'
import { FlatList, Text, TextInput, View, StyleSheet } from 'react-native'

import Coin from '../components/Coin'
import Layout from '../hocs/Layout'
import useFetch from '../hooks/useFetch'

export default function Home() {
  const { data, loadData } = useFetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  const [search, setSearch] = useState(undefined)
  const [refreshing, setRefreshing] = useState(false)

  const filteredData = search ? [...data].filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLocaleLowerCase()) ||
      coin.symbol.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ) : data
  
  return (
    <Layout>
      <View style={styles.header}>
        <Text style={styles.title}>CrypTracker</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search a Coin"
          placeholderTextColor="#858585"
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      <FlatList 
         data={filteredData}
        {...{refreshing}}
        renderItem={({item}) => <Coin coin={item}/>}
        style={styles.list}
        showsVerticalScrollIndicator={false}
        onRefresh={async () => {
          setRefreshing(true)
          await loadData()
          setRefreshing(false)
        }}
      />
      
    </Layout>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginTop: 5,
  },
  list: {
    width: "100%"
  },
  searchInput: {
    color: "#fff",
    borderBottomColor: "#4657CE",
    borderBottomWidth: 1,
    width: "40%",
    textAlign: "center",
  }
})
