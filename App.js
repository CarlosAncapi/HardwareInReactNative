import  React,{ useState,  useEffect } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import Constants from 'expo-constants';

export default function App() {
  const [locacion, setLocacion] = useState({})
  const buscaLocation = async () =>{
    const { status } = await Location.requestBackgroundPermissionsAsync()
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
      <MapView style={styles.map}> 
        {locacion.coords
          ? <Marker
              coordinate={locacion.coords}
              title="Titulo"
              deecription="descripccion del punto" />
            :null
        }

      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
