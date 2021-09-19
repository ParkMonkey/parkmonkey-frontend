import React from 'react';
import Vew from '../../components/custom/Vew';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Image } from 'react-native';

interface MapLocationsInterface {
  address: string,
  postal: string,
  coords: { lat: number, long: number }
}

const locations:MapLocationsInterface[] = [
  {
    address: "262 Jarvis St",
    postal: "Toronto, Ontario M5B 2B9",
    coords: { lat: 43.659944814129624, long: -79.37613383557787 }
  },
  {
    address: "394 Dovercourt Rd",
    postal: "Toronto, Ontario M6J 3E7",
    coords: { lat: 43.6525110595773, long: -79.4261250017898 }
  },
  {
    address: "550 Jarvis St",
    postal: "Toronto, Ontario M4Y 2H9",
    coords: { lat: 43.66936020876486, long: -79.3799488017894 }
  },
  {
    address: "70 Temperance St",
    postal: "Toronto, Ontario M5H 0B1",
    coords: { lat: 43.650693101753525, long: -79.38216965946145 }
  },
  {
    address: "218 Queen Street East",
    postal: "Toronto, Ontario M5A 1S3",
    coords: { lat: 43.65484329048784, long: -79.3692181729539 }
  },
  {
    address: "394 Dovercourt Road",
    postal: "Toronto, Ontario M6J 3E5",
    coords: { lat: 43.65247224588065, long: -79.4262537478195 }
  },
  {
    address: "Placeholder",
    postal: "Placeholder",
    coords: { lat: 43.65484329048789, long: -79.369218172954 }
  },
]

interface MapScreenProps {
  navigation?: any
}

const MapScreen: React.FC<MapScreenProps> = ({navigation}) => {
    return (
    <>
      <Vew style={styles.container}>
        <MapView style={styles.map} 
          region={{
            latitude: 43.659944814129624,
            longitude: -79.37613383557787,
            latitudeDelta: 0.03,
            longitudeDelta: 0.01,
          }}
        >
          {[locations.map(({address, coords, postal}, idx) => (
            <Marker 
              key={idx}
              coordinate={{latitude: coords.lat, longitude: coords.long}}
              // title={address}
            >
              <Image source={require("../../assets/images/banana.png")} style={{
                width: 64, height: 64,
              }} />
            </Marker>
          ))]}

        </MapView>
      </Vew>
    </>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

export default MapScreen;