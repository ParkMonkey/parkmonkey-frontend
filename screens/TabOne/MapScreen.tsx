import React from 'react';
import Vew from '../../components/custom/Vew';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions, Image, ImageStyle, StyleProp } from 'react-native';

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
]

interface MapScreenProps {
  navigation?: any
}

const getBananaImgs = (idx:number) => {
  const style:StyleProp<ImageStyle>={
    width: 64, height: 64,
  };

  if (idx === 0) {
    return <Image source={require("../../assets/images/banana_4.png")} style={style} />;
  } else if (idx === 1) {
    return <Image source={require("../../assets/images/banana_1.png")} style={style} />;
  } else {
    return <Image source={require("../../assets/images/banana_2.png")} style={style} />;
  }
}

const getOnPress = (idx:number) => {
  if (idx === 0) {
    // $4
    return () => {};
  } else if (idx === 1) {
    // $1
    return () => {
      console.log("pressed")
    };
  } else {
    // $2
    return () => {};
  }
}

const MapScreen: React.FC<MapScreenProps> = ({navigation}) => {
  return (
    <>
      <Vew style={styles.container}>
        <MapView style={styles.map} 
          region={{
            latitude: 43.659944814129624,
            longitude: -79.37613383557787,
            latitudeDelta: 0.032,
            longitudeDelta: 0.01,
          }}
        >
          {[locations.map(({address, coords, postal}, idx) => (
            <Marker 
              key={idx}
              coordinate={{latitude: coords.lat, longitude: coords.long}}
              onPress={getOnPress(idx)}
              // title={address}
            >
              {getBananaImgs(idx)}
            </Marker>
          ))]}

        </MapView>
      </Vew>
    </>
  );
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