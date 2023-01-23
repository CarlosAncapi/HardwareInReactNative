import { React, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function App() {
  const buscaLocation = async () =>{
    const { status } = await Location.getForegroundPermissionsAsync()
    if ( status !== 'granted') {
      return Alert.alert('no tenemos los permisos necesarios para acceder a la localizacion')
    }
    const location = await Location.getCurrentPositionAsync({})
    console.log(location)
  }
  useEffect(() =>{
    buscaLocation()
  })

  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
