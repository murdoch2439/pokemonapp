import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (

    <NavigationContainer>

      <View style={styles.container}>
      <StatusBar style="light" backgroundColor="grey" translucent={false}  />
      <MainNavigation navigation />
    </View>
    </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding:10,
  },
});
