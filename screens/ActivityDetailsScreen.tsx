import * as React from 'react';
import { StyleSheet, Image, View, Text, ScrollView, SafeAreaView} from 'react-native';
import Swiper from '../components/Swiper';

function ActivityDetailsHeader(props) {
    return (
        <View style={styles.headerContainer}>
            <View>
                <Text style={styles.date}>{props.date}</Text>
                <Text style={styles.greeting}>ParkMonkey thanks you, {props.name}</Text>
                <Text style={styles.total}>TOTAL</Text>
                <Text style={styles.money}>${props.money} CAD</Text>
            </View>
            <Image style={styles.monkeyIcon} source={require('../assets/images/slide_3.png')}/>
        </View>
    )
}

export default function ActivityDetailsScreen() {
    return (
        <View style={styles.wrapper}>
            {/* <ActivityDetailsHeader date='09/17/12' name='John Doe' money={7.91}/>

            <View style={styles.addressText}>
                <Text style={styles.subtext}>You Were Looking At</Text>
                <Text style={styles.address}>6979 Greenrose Dr.</Text>
            </View> */}
            <Swiper/>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
      wrapper: {
          backgroundColor: 'white'
      },
      headerContainer: {
          backgroundColor: '#E8FAF0',
          padding: 30,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 30,
      },
      date: {
          color: '#1ECF65',
          fontFamily: 'josefin',
          fontSize: 25,
          marginBottom: 30
      },
      greeting: {
        fontFamily: 'josefin',
        fontSize: 45,
        marginBottom: 30,
        maxWidth: 500
      },
      total: {
        fontFamily: 'josefin',
        fontSize: 15,
      },
      money: {
          fontFamily: 'josefin',
          fontSize: 30
      },
      monkeyIcon: {
          marginTop: 10
      },
      addressText: {
          padding: 30
      },
      subtext: {
        fontFamily: 'josefin',
        fontSize: 25,
        marginBottom: 10,
      },
      address: {
        fontFamily: 'josefin',
        fontSize: 50,
        marginBottom: 10,
      }

  });
  