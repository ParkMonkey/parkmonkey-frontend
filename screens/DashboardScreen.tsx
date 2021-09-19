import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import ActivityCard from '../components/ActivityCard';
import DashboardMessages from '../components/DashboardMessages';
import { block } from 'react-native-reanimated';

export default function LoadingScreen() {
    return (
        <ScrollView bounces={false}>
            <View style={styles.container}>
                <ScreenTitle subtext="Welcome Back!" title="John Doe"/>
                <Text style={styles.title}>Map Search</Text>
                <Text style={styles.title}>Your Activity</Text>
                <ActivityCard date='11/09/21' time='60' address='4541 Churchill St.' isGreen={true}/>
                <ActivityCard date='13/09/21' time='120' address='593 Erindale Rd.' isGreen={true}/>
                <ActivityCard date='11/09/21' time='60' address='2334 Hadock St.' isGreen={true}/>
                <Text style={styles.title}>Landlording</Text>
                <Image style={styles.image} source={require('../assets/images/house_1.png')} />
                <RentPlate address='6979 Greenrose Dr.'/>
                <Text style={styles.title}>Your Messages</Text>
                <DashboardMessages date='10/09/21' message='Hello, is your driveway at 6979 Compton Dr. still available?'/>
                <DashboardMessages date='12/09/21' message="What's up dude, can I park at 6979 Compton Dr. today?"/>
                <DashboardMessages date='14/09/21' message='Need parking, 6979 Compton Dr. In 30 minutes? Ok????'/>
                <View style={styles.space}></View>
            </View>
        </ScrollView>
      );
  }
  
  
  
function RentPlate(props) {
    return(
        <View style={styles.plateContainer}>
            <Text style={styles.subText}>You're Renting</Text>
            <Text style={styles.address}>{props.address}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      title: {
          fontFamily:'josefin',
          fontSize: 50,
          marginBottom: 50,
          fontWeight: 'bold',
      },
      image: {
          width: 600,
          height: 300,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 40,
          shadowColor: "#000",
          marginBottom: -10,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
      },
      subText: {
          color: 'white',
          fontFamily: 'josefin',
          fontSize: 20,
          marginBottom: 10
      },
      address: {
        color: 'white',
        fontFamily: 'josefin',
        fontSize: 40
      },
      plateContainer: {
          backgroundColor: '#1ECF65',
          width: 590,
          borderRadius: 40,
          padding: 30,
          marginTop: -30,
          marginBottom: 120,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
      },
      space: {
          margin: 100
      }
    });