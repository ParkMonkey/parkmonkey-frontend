import React from 'react';
import Vew from '../../components/custom/Vew';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

interface MapScreenProps {
    navigation?: any
}

const MapScreen: React.FC<MapScreenProps> = ({navigation}) => {
    return (
    <>
      <Vew style={styles.container}>
          <MapView style={styles.map} />
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