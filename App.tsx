import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PokemonList from './src/screen/pokemon-list';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="grey" translucent={false}  />
      <PokemonList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
