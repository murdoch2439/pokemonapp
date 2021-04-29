import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PokemonList from './src/screen/pokemon-list';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (

    <NavigationContainer>

      <View style={styles.container}>
      <StatusBar style="light" backgroundColor="grey" translucent={false}  />
      <MainNavigation />
    </View>
    </NavigationContainer>
     
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
